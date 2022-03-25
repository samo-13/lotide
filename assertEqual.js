// ---------------------------------------------------------------------------------------------------------
// lotide project
// a function to see a series of success / failure messages printed to the console, letting us know if our functions are behaving as expected.
// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// assertEqual function
// ---------------------------------------------------------------------------------------------------------

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
