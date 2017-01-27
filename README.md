# rng
> ezpz rngz -Confucius

**This RNG uses "arithmetic methods" for simplicity.**

## Usage

### Methods

#### `get`
```javascript
RNG.get()       // -> random number between 0 and 1
RNG.get(10)     // -> random integer between 0 and 9 (`get` is non-inclusive)
RNG.get(1, 10)  // -> random integer between 1 and 9
RNG.get(10) + 1 // -> random integer between 1 and 10
```

#### `choose`
```javascript
var fruits = ['apple', 'orange', 'banana']
var fruit = RNG.choose(fruits) // -> may be 'apple', 'orange' or 'banana'
```

#### `chance`
```javascript
if (RNG.chance(100)) { // 1% chance of a special item drop
  dropReallySpecialItem()
}
```

#### `seed`
```javascript
RNG.seed(newSeedNumber)
RNG.choose(results) // -> same result every time
RNG.seed() // -> same seed every time (increased by 1)
```

### Factory
Call `RNG` to create a new RNG instance with its own independent state.

```javascript
var rng1 = RNG(seed)
var rng2 = RNG(seed)

var planet1 = rng1.choose(planets)
var planet2 = rng2.choose(planets)

rng1.seed() === rng2.seed() // -> true
```

If no `seed` is specified, it will default to a random number.

## License
MIT
