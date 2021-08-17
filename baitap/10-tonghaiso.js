// NUMBER-09: Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?

export function tonghaisochiahetx(n, x) {
  if (!Number.isFinite(n) || n <= 9 || n >= 1000000 || x <= 0 || x >= 19)
    return undefined;
  let sotest = n;

  while (sotest > 9) {
    let sodv = sotest % 10;
    sotest = Math.floor(sotest / 10);
    let stringNumber = String(sotest);
    for (let i = 0; i < stringNumber.length; i++) {
      if (x === Math.floor(stringNumber[i]) + sodv) return true;
    }
  }
  return false;
}
