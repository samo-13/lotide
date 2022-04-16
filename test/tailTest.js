// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const assert = require('chai').assert;
const tail = require('../tail');

// ---------------------------------------------------------------------------------------------------------
// test code
// --- Note that for comparing arrays, Chai gives us assert.deepEqual, because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.
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