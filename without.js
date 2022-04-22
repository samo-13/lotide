// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- without function returns a subset of a given array, removing unwanted elements.
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

const without = function(source, itemsToRemove) {
  let filteredSource = source.filter((item) => !itemsToRemove.includes(item));
  return filteredSource;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

// Ensuring that the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

console.log(assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]))
console.log(without([4, 8, 9], [9])); // => [4, 8])
console.log(without([4, 8, 9], [8])); // => [4, 9])
console.log(without([4, 8, 9], [8, 9])); // => [4])
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3, 2, 1], [1, 2])); // => [3]
// ---------------------------------------------------------------------------------------------------------
// developer notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes// 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// ---------------------------------------------------------------------------------------------------------
