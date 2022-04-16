// ---------------------------------------------------------------------------------------------------------
// require
// ---------------------------------------------------------------------------------------------------------

const assertEqual = require('../assertEqual');

// ---------------------------------------------------------------------------------------------------------
// test code
// ---------------------------------------------------------------------------------------------------------

assertEqual("Lighthouse Labs", "Bootcamp"); // non-identical strings
assertEqual(1, 5); // non-identical numbers
assertEqual(1, 1); // identical numbers
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // identical strings