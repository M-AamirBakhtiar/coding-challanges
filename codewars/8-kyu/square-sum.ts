/*

Challenge Description
======================
Write a function that squares each number in an array of numbers and returns their sum.

*/

const squareSum = (nums: number[]): number => nums.reduce((acc, currentValue) => acc + currentValue ** 2, 0);

console.log(squareSum([1, 2, 3, 4]));
