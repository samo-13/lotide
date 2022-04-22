// lotide project
// findKey function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// ---------------------------------------------------------------------------------------------------------
// assertEqual function
// ---------------------------------------------------------------------------------------------------------

const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ---------------------------------------------------------------------------------------------------------
// findKey function
// ---------------------------------------------------------------------------------------------------------

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]))
    return key;
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

let object1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(object1, 'noma');

module.exports = findKey;