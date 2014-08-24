var lysergix = require('lysergix')
var gm = require('gm')

module.exports = function(buf, cb) {
  var face = lysergix.asciiFilter().content
  var width = 0
  var height = 0
  var x = 0
  var y = 0

  gm(buf).size(function(err, size){
    if (err) {
      cb(err)
    }
    width = size.width
    height = size.width
    fontSize = Math.floor(width / 5)
    x = Math.floor(width / 4)
    y = Math.floor(width / 3)
    this.fontSize(fontSize).drawText(x, y, face).toBuffer(function(err, faced) {
      if (err) {
        cb(err)
      }
      cb (null, faced)
    })
  })
}
