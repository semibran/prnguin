# frand
> Generate pseudorandom numbers using seedable utility functions

This module contains a small collection of simple "generators", i.e. pure functions that transform a `seed` (really just a `Number`) into a predictable output value.

You will usually want to change the seed on every usage (like by incrementing it) unless your goal is to get the same results multiple times.

## usage
```javascript
const Random = require('frand')
```

### `percent`
Generate a number between `0` and `1` using `seed`.
```js
> percent(Math.SQRT2)
0.6455985140055418
```

### `integer`
Generate an integer between `min` and `max` using `seed`.
```js
> integer(1, 10, Math.SQRT1_2)
6
```

### `boolean`
Choose either `true` and `false` based on the given `seed`.
```js
> boolean(Math.PI)
true
```

### `choose`
Choose a random element from the given array using `seed`.
```js
> choose(['apple', 'orange', 'banana'], Math.LN2)
'orange'
```

## install
```sh
npm install frand
```

## license
MIT
