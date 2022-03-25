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
  let tailArray = [];
  if (array.length > 1) {
    tailArray = array;
    tailArray.slice(1);
    console.log(tailArray);
    return tailArray;
  } else {
    tailArray = array;
    console.log(tailArray);
    return tailArray;
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// --- assertEqual does not work for comparing arrays
// ---------------------------------------------------------------------------------------------------------

const words = ["Yo Yo", "Lighthouse", "Labs"]; // strings
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// ---------------------------------------------------------------------------------------------------------

const nums = ([5,6,7]); // numbers
tail(nums);
assertEqual(nums.length, 3);

// ---------------------------------------------------------------------------------------------------------

const emptyArray = ([]);
tail(emptyArray);
assertEqual(emptyArray.length, 0);

// ---------------------------------------------------------------------------------------------------------

const oneArrayItem = ([1]);
tail(oneArrayItem);
assertEqual(oneArrayItem.length, 1);

// ---------------------------------------------------------------------------------------------------------
// developer notes
// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// ---------------------------------------------------------------------------------------------------------

