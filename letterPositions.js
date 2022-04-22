
// // ---------------------------------------------------------------------------------------------------------
// // lotide project
// // --- letterPositions function returns all the indices (zero-based positions) in the string where each character is found.
// // --- for each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
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
// letterPositions function
// ---------------------------------------------------------------------------------------------------------

const letterPositions = function(sentence) {
  const results = {};
  let count = -1;

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        count += 1;
        results[letter].push(count);
      } else {
        count += 1;
        results[letter] = [count];
      }
    } else {
      count += 1;
    }
  }
  return results;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2,3]));
console.log(assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]));

module.exports = letterPositions;