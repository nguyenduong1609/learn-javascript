// NUMBER-05: Kiểm tra số chính phương
// Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
// 0 < n < 100000
// Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
// Trả về true nếu là số chính phương, ngược lại trả về false.

export function sochinhphuong(n) {
  if (!Number.isFinite(n) || n<=0 || n>=1000000) return undefined;
  const canbachai = Math.sqrt(n);
  if (Number.parseInt(canbachai) ===canbachai) return true;
  return false;
}