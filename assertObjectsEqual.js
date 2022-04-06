

// ---------------------------------------------------------------------------------------------------------
// eqArrays function
// ---------------------------------------------------------------------------------------------------------

const eqArrays = function(actual, expected) {
  for (let index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  } return true;
};

// ---------------------------------------------------------------------------------------------------------
// eqObjects function
// ---------------------------------------------------------------------------------------------------------

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  };

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // console.log(eqArrays(object1, object2))
      return eqArrays(object1, object2);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

// ---------------------------------------------------------------------------------------------------------
// assertObjectsEqual function
// ---------------------------------------------------------------------------------------------------------

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

const abc = {a: "7", b: "8", c: [4, 5]};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ba, abc);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ba, ab);