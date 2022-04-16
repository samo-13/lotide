
// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should fail

assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true); // => should pass
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'd']), false); // => should fail