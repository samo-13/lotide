
// ---------------------------------------------------------------------------------------------------------
// lotide project
// a function eqObjects
// --- Returns true if both objects have identical keys with identical values.
// --- Otherwise you get back a big fat false!
// ---------------------------------------------------------------------------------------------------------

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

// After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
// Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// As soon as there is not a match, we can return false
// Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
// ---------------------------------------------------------------------------------------------------------

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// console.log(eqArrays(eqObjects(ab, ba), true));

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
// ---------------------------------------------------------------------------------------------------------
// developer notes
// ---------------------------------------------------------------------------------------------------------
// Here is one possible way of structuring our function's logic:
// --- First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
// --- After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
// --- Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// --- As soon as there is not a match, we can return false
// --- Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)



// const eqObjects = function(object1, object2) {
  //   if (Object.keys(object1).length === Object.keys(object2).length) {
  //     for (let key of Object.keys(object1)) {
  //       if (object1[key] === object2[key]) {
  //         console.log(`😃 Assertion Passed: ${object1} === ${object2}`);
  //         return true;
  //       }
  //     }
  //   }
  //   console.log(`😡 Assertion Failed: ${object1} !== ${object2}`);
  //   return false;
  // };