// NUMBER-05: Kiểm tra số chính phương
// Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
// 0 < n < 100000
// Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
// Trả về true nếu là số chính phương, ngược lại trả về false.

import{ sochinhphuong } from './06-sochinhphuong';
describe('so cp', () => {
  test('so cp ', () => {
    expect(sochinhphuong("a")).toBe(undefined);
    expect(sochinhphuong(-1)).toBe(undefined);
    expect(sochinhphuong(2000000)).toBe(undefined);
    expect(sochinhphuong(32)).toBe(false);
    expect(sochinhphuong(4)).toBe(true);
    expect(sochinhphuong(1)).toBe(true);
    expect(sochinhphuong(0)).toBe(undefined);
    expect(sochinhphuong(161)).toBe(false);
  });
});
