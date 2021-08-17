// NUMBER-07: Kiểm tra số đối xứng
// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false

export function sodoixung(n) {
  if(!Number.isFinite(n) || n<1 || n>=1000000) return undefined;
  if (n<11) return false;
  const stringNumber = String(n);
  12321
  for (let i = 0; i <= Math.floor(stringNumber.length/2); i++) {
    if (stringNumber[i] !== stringNumber[stringNumber.length-1-i]) return false;
  }
  return true;
}