//2. Xử lý số (number)
// NUMBER-01: Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.

import{ soTangDan } from './02-sotangdan';
describe('bai 2', () => {
  test('soTangDan ', () => {
    expect(soTangDan("a")).toBe(undefined);
    expect(soTangDan(-1)).toBe(undefined);
    expect(soTangDan(2000000)).toBe(undefined);
    // expect(soTangDan(123)).toBe(true);
    // expect(soTangDan(31)).toBe(false);
    // expect(soTangDan(1)).toBe(false);
  });

  test('soTangDan ', () => {
    
    // expect(soTangDan(123)).toBe(true);
    expect(soTangDan(321)).toBe(false);
    expect(soTangDan(1321)).toBe(false);
  });
});