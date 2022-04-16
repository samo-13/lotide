// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const tail = require('../tail');
const assertEqual = require('../assertEqual');

// ---------------------------------------------------------------------------------------------------------
// test code
// --- note assertEqual does not work for comparing arrays so test code does not check return value
// ---------------------------------------------------------------------------------------------------------

const words = ["Yo Yo", "Lighthouse", "Labs"]; // strings
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const nums = ([5,6,7]); // numbers
tail(nums);
assertEqual(nums.length, 3);

const emptyArray = ([]);
tail(emptyArray);
assertEqual(emptyArray.length, 0);

const oneArrayItem = ([1]);
tail(oneArrayItem);
assertEqual(oneArrayItem.length, 1);