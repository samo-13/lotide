// ---------------------------------------------------------------------------------------------------------
// lotide project
// a function given an array and an object will return an object containing counts of everything that the input object listed.
// --- only keys which have a truthy value should be counted in the resulting object.
// --- all other strings (either set to false or not included at all in the object) should not be counted.
// --- if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.
// ---------------------------------------------------------------------------------------------------------

const { countLetters } = require(".");

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
// countOnly function
// --- allItems: an array of strings that we need to look through
// --- itemsToCount: an object specifying what to count
// ---------------------------------------------------------------------------------------------------------

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;