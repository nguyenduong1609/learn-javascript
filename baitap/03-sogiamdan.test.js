//2. Xử lý số (number)
// NUMBER-01: Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.

import{ soGiamDan } from './03-sogiamdan';
describe('bai 2', () => {
  test('soTangDan ', () => {
    expect(soGiamDan("a")).toBe(undefined);
    expect(soGiamDan(-1)).toBe(undefined);
    expect(soGiamDan(2000000)).toBe(undefined);
    // expect(soGiamDan(123)).toBe(true);
    // expect(soGiamDan(31)).toBe(false);
    // expect(soGiamDan(1)).toBe(false);
  });

  test('soGiamDan ', () => {
    
    expect(soGiamDan(123)).toBe(false);
    expect(soGiamDan(321)).toBe(true);
    expect(soGiamDan(1321)).toBe(false);
  });
});