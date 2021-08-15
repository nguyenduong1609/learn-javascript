// NUMBER-04: Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// 0 < n < 100000
// Trả về true nếu là số nguyên tố, ngược lại trả về false.

import{ songuyento } from './05-ktrasonguyento';
describe('so nguyen to', () => {
  test('songuyen to ', () => {
    expect(songuyento("a")).toBe(undefined);
    expect(songuyento(-1)).toBe(undefined);
    expect(songuyento(2000000)).toBe(undefined);
    expect(songuyento(32)).toBe(false);
    expect(songuyento(3)).toBe(true);
    expect(songuyento(1)).toBe(true);
    expect(songuyento(11)).toBe(true);
    expect(songuyento(12)).toBe(false);
  });
});
