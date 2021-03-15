/*

Challenge Description
======================
Write a function that takes in an array of numbers and return the smallest value from inside of that array.

*/

function findSmallestValue(nums: number[]): number {
  return Math.min(...nums);
}

console.log(findSmallestValue([18, 55, 34, 2]));
console.log(findSmallestValue([-345, -1, 100, 589]));
