// NUMBER-04: Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// 0 < n < 100000
// Trả về true nếu là số nguyên tố, ngược lại trả về false.

export function songuyento(n) {
  if (!Number.isFinite(n) || n <= 0 || n >= 1000000) return undefined;
  if (n===1 || n ===2) return true;
  for (let i = 2; i < n; i++) {
    if (n%i===0) return false;
    return true;
  }
}