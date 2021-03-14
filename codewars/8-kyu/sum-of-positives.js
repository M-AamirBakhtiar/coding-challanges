/*

Challenge Description
======================
You get an array of numbers, return the sum of all the positive ones. if the array is empty the sum should be 0.

*/

function sumPositiveValues(arr) {
  // Return 0 if the array is empty
  if (arr.length === 0) return 0;

  // Filter out all the positive values and return their sum
  return arr.filter((num) => Math.sign(num) === 1).reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sumPositiveValues([1, 2, 3, 4, 5])); // Should Return 15
console.log(sumPositiveValues([1, -2, 3, 4, 5])); // Should Return 13
console.log(sumPositiveValues([])); // Should Return 0
console.log(sumPositiveValues([-1, -2, -3, -4, -5])); // Should Return 0
