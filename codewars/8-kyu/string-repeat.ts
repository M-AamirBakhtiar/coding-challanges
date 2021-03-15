/*

Challenge Description
======================
Write a function that will take in a string value and a number. it will return the original string repeated n number of times.

*/

function repeatString(n: number, s: string): string {
  return s.repeat(n);
}

console.log(repeatString(6, 'I'));
console.log(repeatString(5, 'Hello'));
