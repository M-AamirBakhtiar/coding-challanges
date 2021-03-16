/*

Challenge Description
======================
Write a function that counts the number of sheep in a given array. every ture value means a sheep is present.

*/

function countSheeps(arr: boolean[]): number {
  return arr.filter((s) => s === true).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // should return 17
