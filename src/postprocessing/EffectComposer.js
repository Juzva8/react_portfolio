import { ClearMaskPass, MaskPass } from './MaskPass.js'
import { ShaderPass } from './ShaderPass.js'
import { CopyShader } from '../shaders/CopyShader.js'
import { LinearFilter, RGBAFormat, Vector2, WebGLRenderTarget } from 'three/src/Three'

let EffectComposer = function(renderer, renderTarget) {
  this.renderer = renderer

  if (renderTarget === undefined) {
    let parameters = {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat,
      stencilBuffer: false,
    }

    let size = renderer.getDrawingBufferSize(new Vector2())
    renderTarget = new WebGLRenderTarget(size.width, size.height, parameters)
    renderTarget.texture.name = 'EffectComposer.rt1'
  }

  this.renderTarget1 = renderTarget
  this.renderTarget2 = renderTarget.clone()
  this.renderTarget2.texture.name = 'EffectComposer.rt2'
  this.writeBuffer = this.renderTarget1
  this.readBuffer = this.renderTarget2
  this.passes = []

  if (CopyShader === undefined) {
    console.error('THREE.EffectComposer relies on THREE.CopyShader')
  }
  if (ShaderPass === undefined) {
    console.error('THREE.EffectComposer relies on THREE.ShaderPass')
  }
  this.copyPass = new ShaderPass(CopyShader)
  this._previousFrameTime = Date.now()
}

Object.assign(EffectComposer.prototype, {
  swapBuffers: function() {
    let tmp = this.readBuffer
    this.readBuffer = this.writeBuffer
    this.writeBuffer = tmp
  },

  addPass: function(pass) {
    this.passes.push(pass)
    let size = this.renderer.getDrawingBufferSize(new Vector2())
    pass.setSize(size.width, size.height)
  },

  insertPass: function(pass, index) {
    this.passes.splice(index, 0, pass)
  },

  render: function(deltaTime) {
    if (deltaTime === undefined) {
      deltaTime = (Date.now() - this._previousFrameTime) * 0.001
    }
    this._previousFrameTime = Date.now()
    let currentRenderTarget = this.renderer.getRenderTarget()
    let maskActive = false
    let pass,
      i,
      il = this.passes.length

    for (i = 0; i < il; i++) {
      pass = this.passes[i]
      if (pass.enabled === false) continue

      pass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime, maskActive)
      if (pass.needsSwap) {
        if (maskActive) {
          let context = this.renderer.context
          context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff)
          this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime)
          context.stencilFunc(context.EQUAL, 1, 0xffffffff)
        }
        this.swapBuffers()
      }
      if (MaskPass !== undefined) {
        if (pass instanceof MaskPass) {
          maskActive = true
        } else if (pass instanceof ClearMaskPass) {
          maskActive = false
        }
      }
    }
    this.renderer.setRenderTarget(currentRenderTarget)
  },

  reset: function(renderTarget) {
    if (renderTarget === undefined) {
      let size = this.renderer.getDrawingBufferSize(new Vector2())
      renderTarget = this.renderTarget1.clone()
      renderTarget.setSize(size.width, size.height)
    }
    this.renderTarget1.dispose()
    this.renderTarget2.dispose()
    this.renderTarget1 = renderTarget
    this.renderTarget2 = renderTarget.clone()
    this.writeBuffer = this.renderTarget1
    this.readBuffer = this.renderTarget2
  },
  setSize: function(width, height) {
    this.renderTarget1.setSize(width, height)
    this.renderTarget2.setSize(width, height)
    for (let i = 0; i < this.passes.length; i++) {
      this.passes[i].setSize(width, height)
    }
  },
})

export { EffectComposer }
