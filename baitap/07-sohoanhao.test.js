import { sohoanhao } from "./07-sohoanhao";

describe('so hoan hao', () => {
  test('shh', () => {
    expect(sohoanhao(0)).toBe(undefined);
    expect(sohoanhao(1)).toBe(undefined);
    expect(sohoanhao(2)).toBe(false);
    expect(sohoanhao(3)).toBe(false);
    expect(sohoanhao(4)).toBe(false);
    expect(sohoanhao(6)).toBe(true);
  });
  
});