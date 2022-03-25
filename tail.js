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
  if (array.length > 1) {
  array.shift();
  return array;
  } else if (array.length === 1) {
    return array;
  } else {
    return array;
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual(tail([5,6,7]), [6,7]); // numbers
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // strings
assertEqual(tail([]), []); // empty array
assertEqual(tail(["Yo"]), "Yo"); // one string
assertEqual(tail([1]), 1); // one number

// ---------------------------------------------------------------------------------------------------------
// developer notes
// ---------------------------------------------------------------------------------------------------------

// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift