// Our map function will take in two arguments:
// (01.) An array to map
// (02.) A callback function
// The map function will return a new array based on the results of the callback function.

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
// map function
// ---------------------------------------------------------------------------------------------------------

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  console.log('array:', array);
  console.log('callback:', callback);
  const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,  ['g', 'c', 't', 'm', 't']); // first letter of each word

results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2,  ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]); // to uppercase

results3 = map(words, word => word[0].toUpperCase() + word.substring(1));
console.log(results3);
assertArraysEqual(results3,  ["Ground", "Control", "To", "Major", "Tom"]); // first letter to uppercase