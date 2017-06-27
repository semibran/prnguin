var boolean = require('./boolean')

module.exports = function shuffle(array, seed) {
  return array.sort(function () {
    return boolean(seed++)
  })
}
