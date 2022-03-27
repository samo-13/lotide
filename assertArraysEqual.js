// ---------------------------------------------------------------------------------------------------------
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// eqArrays function
// ---------------------------------------------------------------------------------------------------------

const eqArrays = function(actual, expected) {
  for (let index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  } return true;
};

// ---------------------------------------------------------------------------------------------------------
// assertArraysEqual function
// ---------------------------------------------------------------------------------------------------------

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should fail
assertArraysEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should fail
assertArraysEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true); // => should pass
assertArraysEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'd']), false); // => should fail