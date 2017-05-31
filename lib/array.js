exports.choose = choose
exports.shuffle = shuffle

var Random = require('./')
var integer = Random.integer
var boolean = Random.boolean

function choose(array, seed) {
	return array[integer(0, array.length - 1, seed)]
}

function shuffle(array, seed) {
	return array.sort(function (a, b) {
		return boolean(seed++)
	})
}
