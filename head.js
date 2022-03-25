// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- a function head which returns the first item in the array.
// --- should not return the first element as an array. It should simply return the element itself.
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
// head function
// ---------------------------------------------------------------------------------------------------------

let head = function(array) {
  return array[0];
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual(head([5,6,7]), 5); // numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // strings
assertEqual(head([]), undefined); // empty array
assertEqual(head(["Yo"]), "Yo"); // one string
assertEqual(head([1]), 1); // one number
