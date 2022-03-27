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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should fail
assertArraysEqual([1, 2, 3], [1, 2]); // => should fail
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']); // => should pass
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'd']); // => should fail