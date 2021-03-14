/*

Challenge Description
======================
Create a function that takes a boolean value and and returns a string 'Yes' if the value is true or string 'No' if the value is false.

*/

function convertBoolean(bool) {
  // Return 'Yes' if bool is true and 'No' if its false.
  return !bool ? 'No' : 'Yes';
}

console.log(convertBoolean(true));
console.log(convertBoolean(false));
