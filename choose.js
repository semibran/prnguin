var integer = require('./integer')

module.exports = function choose(array, seed) {
  return array[integer(0, array.length - 1, seed)]
}
