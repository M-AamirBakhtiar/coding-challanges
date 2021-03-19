/*

Challenge Description
======================
Write a function that takes in a string and returns the length of the shortest word(s) in that string.

*/

function shortestWordLength(str: string): number {
  return Math.min(...str.split(' ').map((s) => s.length));
}

console.log(shortestWordLength('bitcoin take over the world maybe who knows perhaps'));
