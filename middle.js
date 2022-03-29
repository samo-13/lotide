// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- middle function takes in an array and returns the middle-most element(s) of the given array.
// --- arrays with one or two elements returns an empty array.
// --- arrays with odd number of elements, returns a single middle element
// --- arrays with an even number of elements, returns two middle values
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

const middle = function(inputArray) {

  if (inputArray.length <= 2) {
    return [];
  }

  if (inputArray.length % 2 === 0) {
    let firstEvenIndex = inputArray.length / 2 -1
    let secondEvenIndex = inputArray.length / 2
    return [inputArray[firstEvenIndex], inputArray[secondEvenIndex]]
  }

  if (inputArray.length % 2 !== 0) {
    let oddMiddleValue = 0;
    for (let oddIndex = 0; oddIndex < inputArray.length; oddIndex ++) {
      inputArray[oddIndex] === inputArray[(inputArray.length - 1) / 2] && (oddMiddleValue = inputArray[oddIndex]);
    } return oddMiddleValue;
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// ---------------------------------------------------------------------------------------------------------
// developer notes
// ---------------------------------------------------------------------------------------------------------
