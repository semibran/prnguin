const { percent, integer, boolean } = require('../lib')
const { choose, shuffle } = require('../lib/array')

var seed = Math.random() * 0xFFFFFF

console.log('percent', percent(seed++))
console.log('integer', integer(1, 10, seed++))
console.log('boolean', boolean(seed++))
console.log('choose', choose([1, 2, 3, 4, 5], seed++))
console.log('shuffle', shuffle([1, 2, 3, 4, 5], seed++))
