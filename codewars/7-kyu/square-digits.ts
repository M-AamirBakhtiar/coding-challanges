/*

Challenge Description
======================
Write a function that squares every digit and then concatenates them. 

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

*/

function squareDigits(num: number): number {
  return Number(
    num
      .toString()
      .split('')
      .reduce((acc, currentValue) => acc + String(Number(currentValue) ** 2), '')
  );
}

console.log(squareDigits(9119));
