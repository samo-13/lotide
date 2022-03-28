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
  for (let sourceIndex = 0; sourceIndex < source.length; sourceIndex++) {
    for (let itemsToRemoveIndex = 0; itemsToRemoveIndex < itemsToRemove.length; itemsToRemoveIndex++) {
      if (source[sourceIndex] === itemsToRemove[itemsToRemoveIndex]){
        source.splice(sourceIndex, 1);
      }
    }
  }
  return source;
}

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([4, 8, 9], [9])); // => [4, 8])
console.log(without([4, 8, 9], [8])); // => [4, 9])
console.log(without([4, 8, 9], [8, 9])); // => [4])

// ---------------------------------------------------------------------------------------------------------
// developer notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// ---------------------------------------------------------------------------------------------------------
