var percent = require("./percent")

module.exports = function boolean(seed) {
  return percent(seed) < 0.5
}
