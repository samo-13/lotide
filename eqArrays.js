// ---------------------------------------------------------------------------------------------------------
// lotide project
// a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// assertEqual function
// ---------------------------------------------------------------------------------------------------------

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ---------------------------------------------------------------------------------------------------------
// eqArrays function
// ---------------------------------------------------------------------------------------------------------
const eqArrays = function(actual, expected) {
  for (index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }

}


// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should fail

assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true); // => should pass
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'd']), false); // => should fail

