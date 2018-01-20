# prnguin
This module contains a small collection of simple "generators", i.e. pure functions that transform a number into a predictable output value. You will usually want to change the seed after every use (typically by incrementing it) unless your goal is to get the same results multiple times.

Since generators are just functions, crafting your own custom generators to match specific scenarios is a trivial matter. For example, the following generator simulates the rolling of a six-sided die.
```js
function roll(seed) {
  return integer(1, 6, seed)
}
```
Additionally, all the functions in this module derive their seemingly random nature from `percent`, further demonstrating their composability.

## usage
[![NPM](https://nodei.co/npm/prnguin.png?mini)](https://www.npmjs.com/package/prnguin)
```js
const { percent, integer, boolean, pick, shuffle } = require("prnguin")
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
> integer(1, 10, seed++)
6
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
  var connector = pick(connectors, seed++)
  doors.push(connector)
}
```

### `pick(array, seed)`
Chooses a random element from `array` using `seed`.
```js
var card = pick(deck, seed++)
```

### `shuffle(array, seed)`
Shuffles the items in `array` in place using `seed`.
```js
shuffle(deck, seed++)
```
`shuffle` also returns the mutated array, reminiscent of `Array.prototype.sort`.

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
