/*

Challenge Description
======================
Write a functon that takes in a number and return the number values in desending order.

*/

function descendingOrder(n: number): number {
  return Number(
    n
      .toString()
      .split('')
      .sort((a: any, b: any) => b - a)
      .join('')
  );
}

console.log(descendingOrder(123456789));
