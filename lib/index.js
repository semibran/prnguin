module.exports = {
	Seed: Seed,
	float: float,
	int: int,
	boolean: boolean,
	char: char,
	sample: sample,
	shuffle: shuffle
}

function Seed (value) {
	return { value: value }
}

function float (min, max) {
	return function generate (seed) {
		var x = Math.sin(seed.value++) * 0xFFFFFF
		return (x - Math.floor(x)) * (max - min) + min
	}
}

function int (min, max) {
	return function generate (seed) {
		return Math.round(float(0, 1)(seed) * (max - min)) + min
	}
}

function boolean (seed) {
	return float(0, 1)(seed) < 0.5
}

function char (seed) {
	return String.fromCharCode(int(97, 122)(seed))
}

function sample (array) {
	return function generate (seed) {
		return array[int(0, array.length - 1)(seed)]
	}
}

function shuffle (array) {
	return function generate (seed) {
		return array.slice().sort(function random(a, b) {
			return boolean(seed)
		})
	}
}
