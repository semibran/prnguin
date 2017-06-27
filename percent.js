module.exports = function percent(seed) {
  var x = Math.sin(seed) * 0xFFFFFF
  return x - Math.floor(x)
}
