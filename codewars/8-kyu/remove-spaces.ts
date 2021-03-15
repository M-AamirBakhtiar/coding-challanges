/*

Challenge Description
======================
Write a function that removes all the spaces between characters in a given string.

*/

function removeSpaceInString(str: string): string {
  return str.split(' ').join('');
}

console.log(removeSpaceInString('8 j 8   mBliB8g  imjB8B8  jl  B'));
