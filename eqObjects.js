
// ---------------------------------------------------------------------------------------------------------
// lotide project
// a function eqObjects
// --- Returns true if both objects have identical keys with identical values.
// --- Otherwise you get back a big fat false!
// ---------------------------------------------------------------------------------------------------------

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        console.log(`😃 Assertion Passed: ${object1} === ${object2}`);
        return true;
      }
    }
  }
  console.log(`😡 Assertion Failed: ${object1} !== ${object2}`);
  return false;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false