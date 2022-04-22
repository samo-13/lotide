// ---------------------------------------------------------------------------------------------------------
// lotide project
// findKeyByValue function takes in an object and a value.
// --- It should scan the object and return the first key which contains the given value.
// --- if no key with that given value is found, then it should return undefined.
// ---------------------------------------------------------------------------------------------------------

const { findKey } = require(".");

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
// findKeyByValue function
// ---------------------------------------------------------------------------------------------------------

const findKeyByValue = function(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// ---------------------------------------------------------------------------------------------------------

// developer notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// ---------------------------------------------------------------------------------------------------------

module.exports = findKeyByValue;