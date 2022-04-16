// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- tail function returns every element except the tail (first element) of the array, not just the last element of the array.
// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// tail function
// ---------------------------------------------------------------------------------------------------------

let tail = function(array) {
  return array.slice(1);
};

// ---------------------------------------------------------------------------------------------------------
// export
// ---------------------------------------------------------------------------------------------------------

module.exports = tail;

// ---------------------------------------------------------------------------------------------------------
// developer notes
// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// ---------------------------------------------------------------------------------------------------------

// original implementation:
// let tail = function(array) {
  // let tailArray = [];
  // if (array.length > 1) {
  //   tailArray = array;
  //   tailArray.slice(1);
  //   console.log(tailArray);
  //   return tailArray;
  // } else {
  //   tailArray = array;
  //   console.log(tailArray);
  //   return tailArray;
  // }
  // };