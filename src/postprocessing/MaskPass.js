import { Pass } from './Pass.js'

var MaskPass = function(scene, camera) {
  Pass.call(this)

  this.scene = scene
  this.camera = camera

  this.clear = true
  this.needsSwap = false

  this.inverse = false
}

MaskPass.prototype = Object.assign(Object.create(Pass.prototype), {
  constructor: MaskPass,

  render: function(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
    var context = renderer.context
    var state = renderer.state

    state.buffers.color.setMask(false)
    state.buffers.depth.setMask(false)

    state.buffers.color.setLocked(true)
    state.buffers.depth.setLocked(true)


    var writeValue, clearValue

    if (this.inverse) {
      writeValue = 0
      clearValue = 1
    } else {
      writeValue = 1
      clearValue = 0
    }

    state.buffers.stencil.setTest(true)
    state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE)
    state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 0xffffffff)
    state.buffers.stencil.setClear(clearValue)


    renderer.setRenderTarget(readBuffer)
    if (this.clear) renderer.clear()
    renderer.render(this.scene, this.camera)

    renderer.setRenderTarget(writeBuffer)
    if (this.clear) renderer.clear()
    renderer.render(this.scene, this.camera)

    state.buffers.color.setLocked(false)
    state.buffers.depth.setLocked(false)


    state.buffers.stencil.setFunc(context.EQUAL, 1, 0xffffffff) 
    state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP)
  },
})

var ClearMaskPass = function() {
  Pass.call(this)

  this.needsSwap = false
}

ClearMaskPass.prototype = Object.create(Pass.prototype)

Object.assign(ClearMaskPass.prototype, {
  render: function(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
    renderer.state.buffers.stencil.setTest(false)
  },
})

export { ClearMaskPass, MaskPass }
