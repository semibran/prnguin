var percent = require('./percent')

module.exports = function integer(min, max, seed) {
  return Math.round(percent(seed) * (max - min)) + min
}
