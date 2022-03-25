// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- tail function returns every element except the tail (first element) of the array, not just the last element of the array.
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
// tail function
// ---------------------------------------------------------------------------------------------------------

let tail = function(array) {
  array.shift();
  return array;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual(tail([5,6,7]), [6,7]); // numbers
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // strings
assertEqual(tail([]), undefined); // empty array
assertEqual(tail(["Yo"]), "Yo"); // one string
assertEqual(tail([1]), 1); // one number

// ---------------------------------------------------------------------------------------------------------
// developer notes
// ---------------------------------------------------------------------------------------------------------

// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift