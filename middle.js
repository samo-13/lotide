// ---------------------------------------------------------------------------------------------------------
// lotide project
// --- middle function takes in an array and returns the middle-most element(s) of the given array.
// --- arrays with one or two elements returns an empty array.
// --- arrays with odd number of elements, returns a single middle element
// --- arrays with an even number of elements, returns two middle values
// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// middle function
// ---------------------------------------------------------------------------------------------------------

const middle = function(inputArray) {

  if (inputArray.length <= 2) {
    return [];
  }

  if (inputArray.length % 2 === 0) {
    let firstEvenIndex = inputArray.length / 2 -1
    let secondEvenIndex = inputArray.length / 2
    return [inputArray[firstEvenIndex], inputArray[secondEvenIndex]]
  }

  if (inputArray.length % 2 !== 0) {
    let oddMiddleValue = 0;
    for (let oddIndex = 0; oddIndex < inputArray.length; oddIndex ++) {
      inputArray[oddIndex] === inputArray[(inputArray.length - 1) / 2] && (oddMiddleValue = inputArray[oddIndex]);
    } return [oddMiddleValue];
  }
};

// ---------------------------------------------------------------------------------------------------------
// exports
// ---------------------------------------------------------------------------------------------------------

module.exports = middle;

// ---------------------------------------------------------------------------------------------------------
// developer notes
// ---------------------------------------------------------------------------------------------------------
