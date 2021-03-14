/*

Challenge Description
======================
Write a function that reverses a string passed to it.

*/

function reverseString(string) {
  // Turn the string into an array reverse all the values and join it back together.
  return string.split('').reverse().join('');
}

console.log(reverseString('world')); // Should return dlrow
console.log(reverseString('hello')); // Should return olle
console.log(reverseString('')); // Should return ''
console.log(reverseString('h')); // Should return h
