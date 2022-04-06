

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
  // Implement me!
};