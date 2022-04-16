// ---------------------------------------------------------------------------------------------------------
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
// ---------------------------------------------------------------------------------------------------------
// The assertArraysEqual.js module should export its assertArraysEqual function
// The assertArraysEqual.js file should require the eqArrays function instead of it being copied in there

// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const eqArrays = require('./eqArrays');

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
// exports
// ---------------------------------------------------------------------------------------------------------

module.exports = assertArraysEqual;