// NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false

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

export function soTangDanx(n, x) {
  if (
    !Number.isFinite(n) ||
    !Number.isFinite(x) ||
    n <= 9 ||
    x <= 0 ||
    x >= 5 ||
    n >= 1000000
  )
    return undefined;
  let stringNumber = String(n);
  let length = stringNumber.length;

  for (let i = 0; i < length - 1; i++) {
    if (stringNumber[i + 1] - stringNumber[i] !== x) {
      return false;
    }
  }

  return true;
}
// console.log(soTangDan(56789));
