var rng = RNG

module.exports = rng
Object.assign(rng, RNG())

function RNG(initialSeed) {

  if (isNaN(initialSeed))
    initialSeed = Math.random() * 256

  var currentSeed = initialSeed

  return { get: get, choose: choose, chance: chance, seed: seed }

  function get(min, max) {
    var a = arguments.length
    if (a === 0) {
      let x = Math.sin(currentSeed++) * 256
      return x - Math.floor(x)
    } else if (a === 1)
      max = min, min = 0
    return Math.floor(get() * (max - min)) + min
  }

  function choose(items) {
    return items[get(items.length)]
  }

  function chance(chance) {
    if (isNaN(chance))
      chance = 2
    return !get(chance)
  }

  function seed(newSeed) {
    if (!isNaN(newSeed))
      initialSeed = currentSeed = newSeed
    return currentSeed
  }
}
