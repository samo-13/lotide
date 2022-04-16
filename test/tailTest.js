// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const assert = require('chai').assert;
const tail = require('../tail');

// ---------------------------------------------------------------------------------------------------------
// test code
// --- note assertEqual does not work for comparing arrays so test code does not check return value
// ---------------------------------------------------------------------------------------------------------

// const words = ["Yo Yo", "Lighthouse", "Labs"]; // strings
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const nums = ([5,6,7]); // numbers
// tail(nums);
// assertEqual(nums.length, 3);

// const emptyArray = ([]);
// tail(emptyArray);
// assertEqual(emptyArray.length, 0);

// const oneArrayItem = ([1]);
// tail(oneArrayItem);
// assertEqual(oneArrayItem.length, 1);

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });

  // numbers
  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]); 
  });

  // strings 
  it("returns ['Lighthouse, Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

  // empty array 
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });

  // one string
  it("returns [] for ['Yo']", () => {
    assert.deepEqual(tail(["Yo"]), []); 
  });

  // one number
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []); 
  });

});