// // ---------------------------------------------------------------------------------------------------------
// // lotide project
// // --- flatten function flattens a given array with other arrays inside, into a single-level array.
// // ---------------------------------------------------------------------------------------------------------

// // ---------------------------------------------------------------------------------------------------------
// // eqArrays function
// // ---------------------------------------------------------------------------------------------------------

const eqArrays = function(actual, expected) {
  for (let index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  } return true;
};

// // ---------------------------------------------------------------------------------------------------------
// // assertArraysEqual function
// // ---------------------------------------------------------------------------------------------------------

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

// const flatten = function(input) {
//   let flattenedArray = [];

//   for (let i = 0; i < input.length; i++) {
  
//     if (Array.isArray[i]) {
//       console.log(i);
//       console.log('typeof(i) in for loop:', typeof i);
//     } else {
//       console.log(i);
//       console.log('typeof(i) out of for loop:', typeof i);
//       flattenedArray = input
//     }
//   }
//   return flattenedArray;
// };

const flatten = function(input) {
  return input.flat();
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

// console.log(flatten([1, 2, 3, 4, 5, [6]]));
console.log(flatten([1, 2, 3, 4, 5, [6]]));
console.log(assertArraysEqual(flatten([1, 2, 3, 4, 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]))
console.log(assertArraysEqual(flatten([1]), [1]))
console.log(assertArraysEqual(flatten([]), []))

// ---------------------------------------------------------------------------------------------------------
// developer notes
// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// --- refactor using recursion after recursion is learned to handle mutliple nesting
// ---------------------------------------------------------------------------------------------------------

module.exports = flatten;