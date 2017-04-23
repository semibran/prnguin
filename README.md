# random
> Generate pseudorandom numbers with seedable utility functions

This module contains a collection of simple "generators", i.e. functions that transform a "seed" into a predictable output value. Note that the `Seed` passed into a generator is mutated as a side effect - so while a generator is not a pure function, it is ultimately more intuitive and pleasant to use than if that were the case.

## usage
```javascript
const Random = require('random')
const { Seed, float, int, boolean, char, choose, shuffle } = Random // or whatever methods you wish to expose
```

### `Seed`
Creates a `Seed` object from the given `Number`.
```javascript
var seed = Random.Seed(value) // -> Seed
```
This is just syntactic sugar for creating an object via `{ value }`.


### `float`
Generates a float between `min` and `max`, **exclusively**.
```javascript
var float = Random.float(0, 1)(seed) // -> Number between 0 and 1 (i.e. seedable Math.random())
```


### `int`
Generates an integer between `min` and `max`, **inclusively**.
```javascript
var int = Random.int(1, 10)(seed) // -> Number between 1 and 10
```


### `boolean`
Generates a boolean (`true`/`false`).
```javascript
var boolean = Random.boolean(seed) // -> Boolean
```


### `char`
Generates a lowercase letter.
```javascript
var char = Random.char(seed) // -> String from 'a' to 'z'
```


### `choose`
Picks a random item from the specified array.
```javascript
var choose = Random.choose(['foo', 'bar', 'baz']) // -> 'foo', 'bar', or 'baz'
```


### `shuffle`
Generates a shuffled version of the specified array. Unlike `Array.sort`, the array items are not rearranged in place.
```javascript
var items = Random.shuffle([1, 2, 3, 4, 5])
```



## install
```sh
npm install semibran/random
```

## license
MIT
