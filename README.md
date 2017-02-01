# random
> Simple and seedable pseudorandom number generator

**This RNG uses "arithmetic methods" for simplicity.**

## Usage

### Methods

#### `get`
```javascript
Random.get()       // -> random number between 0 and 1
Random.get(10)     // -> random integer between 0 and 9 (`get` is non-inclusive)
Random.get(1, 10)  // -> random integer between 1 and 9
Random.get(10) + 1 // -> random integer between 1 and 10
```

#### `choose`
```javascript
var fruits = ['apple', 'orange', 'banana']
var fruit = Random.choose(fruits) // -> may be 'apple', 'orange' or 'banana'
```

#### `chance`
```javascript
if (Random.chance(100)) { // 1% chance of a special item drop
  dropReallySpecialItem()
}
```

#### `seed`
```javascript
Random.seed(newSeedNumber)
Random.choose(results) // -> same result every time
Random.seed() // -> same seed every time (increased by 1)
```

### Factory
Call `Random` to create a new Random instance with its own independent state.

```javascript
var random1 = Random(seed)
var random2 = Random(seed)

var planet1 = random1.choose(planets)
var planet2 = random2.choose(planets)

rng1.seed() === rng2.seed() // -> true
```

If no `seed` is specified, it will default to a random number.

## License
MIT
