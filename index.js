exports.percent = percent
exports.integer = integer
exports.boolean = boolean

var sin = Math.sin
var floor = Math.floor
var round = Math.round

function percent(seed) {
	var x = sin(seed) * 0xFFFFFF
	return x - floor(x)
}

function integer(min, max, seed) {
	return round(percent(seed) * (max - min)) + min
}

function boolean(seed) {
	return percent(seed) < 0.5
}
