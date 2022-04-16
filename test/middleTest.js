// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]); // => should pass
assertArraysEqual(middle([1]), []); // => should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should pass