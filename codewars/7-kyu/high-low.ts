/*

Challenge Description
======================
Write a function that takes in a string sperated by space and returns the highest and lowest values in the string.


*/

function highAndLow(str: string): string {
  const nums = str.split(' ').map((s) => Number(s));
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return `${max.toString()} ${min.toString()}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
