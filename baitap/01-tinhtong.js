//bai tap 1
export function sum(a, b) {
  return a + b;
}
// module.exports = sum;

export function sumNumber(n) {
  if (!Number.isFinite(n) || n <= 0) return undefined;
  let sumN = 0;
  for (let i = 1; i <= n; i++) {
    sumN += i;
  }
  return sumN;
}
// // console.log(sumNumber(4));

// function sumNumber(n) {
//   if (n <= 0) return undefined;
//   let sumN = 0;
//   for (let i = 1; i <= n; i++) {
//     sumN += i;
//   }
//   return sumN;
// }
// console.log(sumNumber(4));
