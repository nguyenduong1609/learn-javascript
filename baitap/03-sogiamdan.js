//2. Xử lý số (number)
// NUMBER-01: Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.

// export function soTangDan(n) {
//   if (!Number.isFinite(n) || n <= 9 || n >= 1000000) return undefined;
//   let stringNumber = String(n);
//   let length = stringNumber.length;
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(Number(stringNumber[i]));
//   }
//   let arrSort = arr.sort();
//   let numberSS = 0;
//   for (let y = 0; y < length; y++) {
//     numberSS += arrSort[y] * Math.pow(10 , (length - y - 1));
//   }
//   return n===numberSS;
// };

//v2

// export function soGiamDan(n) {
//   if (!Number.isFinite(n) || n <= 9 || n >= 1000000) return undefined;
//   let stringNumber = String(n);
//   let length = stringNumber.length;

//   for (let i = 0; i < length-1; i++) {
//     if (stringNumber[i+1] > stringNumber[i]){
//       return false
//     }
//   }

//   return true;
// };

//v3

321;

export function soGiamDan(n) {
  if (!Number.isFinite(n) || n <= 9 || n >= 1000000) return undefined;

  
  let songuyen = n;
  let sodvtrc = 0;
  while (songuyen > 0) {
    const sodv = songuyen % 10;
    if (sodv < sodvtrc) return false;
    sodvtrc = sodv;
    songuyen = Math.floor(songuyen / 10);
  }

  return true;
}
// console.log(soTangDan(56789));
