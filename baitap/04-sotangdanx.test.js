// NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false

import { soTangDanx } from "./04-sotangdanx";
describe("bai 4", () => {
  test("soTangDanx ", () => {
    expect(soTangDanx(1, 1)).toBe(undefined);
    expect(soTangDanx(-1, 1)).toBe(undefined);
    expect(soTangDanx(2000000, 1)).toBe(undefined);
  });

  test("soTangDanx ", () => {
    expect(soTangDanx(321, 1)).toBe(false);
    expect(soTangDanx(135, 2)).toBe(true);
  });
});
