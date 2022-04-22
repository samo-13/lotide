// ---------------------------------------------------------------------------------------------------------
// lotide project
// take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// assertEqual function
// ---------------------------------------------------------------------------------------------------------

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ---------------------------------------------------------------------------------------------------------
// countLetters function
// ---------------------------------------------------------------------------------------------------------

const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        (results[letter] = 1);
      }
    }
  }
  return results;
};

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

console.log(countLetters('My name is Sarah'));

/*
{
m: 2,
n: 1,
a: 3,
e: 1,
i: 1,
s: 2,
r: 1,
h: 1
};
*/

const sentence = 'My name is Sarah'
const result = countLetters(sentence);

assertEqual(result["m"], 2);
assertEqual(result["n"], 1);
assertEqual(result["a"], 3);

module.exports = countLetters;