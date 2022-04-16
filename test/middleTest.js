// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const assert = require('chai').assert;
const middle = require('../middle');

// ---------------------------------------------------------------------------------------------------------
// test code
// --- Note that for comparing arrays, Chai gives us assert.deepEqual, because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.
// ---------------------------------------------------------------------------------------------------------

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  // even
  it("returns [1, 2, 3, 4] for [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  // odd
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  // odd
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });

  // empty array
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  // only 2 numbers
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  // one number
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});