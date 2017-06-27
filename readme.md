# frand
This module contains a small collection of simple "generators", i.e. pure functions that transform a number into a predictable output value.

You will usually want to change the seed after every use (typically by incrementing it) unless your goal is to get the same results multiple times.

## usage
[![NPM](https://nodei.co/npm/frand.png?mini)](https://www.npmjs.com/package/frand)
```js
const { percent, integer, boolean, choose, shuffle } = require('frand')
```

### `percent(seed)`
Generate a number between `0` and `1` using `seed`, **exclusively**.
```js
if (percent(seed++) < 0.1) {
  money.type = 'gold'
} else {
  money.type = 'copper'
}
```
`1` **is not** included in the set of possible return values, so this function is essentially a seedable version of `Math.random()`.

### `integer(min, max, seed)`
Generate an integer between `min` and `max` using `seed`, **inclusively**.
```js
function roll(seed) {
  return integer(1, 6, seed)
}
```
Unlike `percent`, the upper number (`max`) is included in the set of possible return values.

### `boolean(seed)`
Choose either `true` and `false` based on the given `seed`.
```js
if (boolean(seed++)) {
  for (var connector of connectors) {
    floors.push(connector)
  }
} else {
  var connector = choose(connectors, seed++)
  doors.push(connector)
}
```

### `choose(array, seed)`
Chooses a random element from `array` using `seed`.
```js
var card = choose(deck, seed++)
```

### `shuffle(array, seed)`
Shuffles the items in `array` in place using `seed`.
```js
shuffle(deck, seed++)
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
