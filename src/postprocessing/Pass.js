var Pass = function() {
  this.enabled = true

  this.needsSwap = true

  this.clear = false


  this.renderToScreen = false
}

Object.assign(Pass.prototype, {
  setSize: function(width, height) {},

  render: function(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
    console.error('THREE.Pass: .render() must be implemented in derived pass.')
  },
})

export { Pass }