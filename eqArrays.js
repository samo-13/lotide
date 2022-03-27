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


// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual("Lighthouse Labs", "Bootcamp"); // non-identical strings
assertEqual(1, 5); // non-identical numbers
assertEqual(1, 1); // identical numbers
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // identical strings