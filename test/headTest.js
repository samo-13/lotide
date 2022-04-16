// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const assert = require('chai').assert;
const head = require('../head');

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  // numbers
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });

  // strings 
  it("returns Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  // empty array 
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

  // one string
  it("returns 'Yo' for ['Yo']", () => {
    assert.strictEqual(head(["Yo"]), "Yo"); 
  });

  // one number
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1); 
  });

});