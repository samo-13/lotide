// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- flatten function flattens a given an array with other arrays inside, into a single-level array.
// --- only handles one level of nesting.
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
// without function
// ---------------------------------------------------------------------------------------------------------

const flatten = function(input) {
  let result = [].concat.apply([], input)
  console.log(result);
  return result;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, 7]]), [1, 2, 3, 4, 5, 6, 7]))
console.log(assertArraysEqual(flatten([1]), [1]))
console.log(assertArraysEqual(flatten([]), []))

// ---------------------------------------------------------------------------------------------------------
// developer notes
// --- refactor using recursion after recursion is learned to handle mutliple nesting
// ---------------------------------------------------------------------------------------------------------
