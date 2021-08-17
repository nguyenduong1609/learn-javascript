// NUMBER-08: Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000)
//  có tổng chữ số chia hết cho 10 hay không?

export function sotong10(n) {
  if (!Number.isFinite(n) || n <= 0 || n >= 1000000) return undefined;
  if(n<19) return false;
  let sum = 0;
  let sotest = n;

  while (sotest > 10) {
    let sodv = sotest % 10;
    sotest = Math.floor(sotest / 10);
    if (sotest < 10) sum = sum + sotest;
    sum = sum + sodv;
  }
  return sum % 10 === 0;
}
