/*

Challenge Description
======================
Write a function that takes in a string which contain a given name and a sir name. Return a string with the initial of the name.

*/

function abbreviateName(str: string): string {
  return str
    .split(' ')
    .map((s) => s[0])
    .join('.');
}

console.log(abbreviateName('Sam Harris'));
console.log(abbreviateName('Patrick Feenan'));
console.log(abbreviateName('Evan Cole'));
