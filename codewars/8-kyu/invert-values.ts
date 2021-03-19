/*

Challenge Description
======================
Write a function that takes in an array of positive and negative integers. it should return the invert of the number.

*/

function invertValues(arr: number[]): number[] {
  return arr.map((n) => (Math.sign(n) === 1 ? -n : -n));
}

console.log(invertValues([1, 2, 3, 4, 5]));
console.log(invertValues([1, -2, 3, -4, 5]));
