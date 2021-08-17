import { sodoixung } from "./08-sodoixung";

describe('so doi xung', () => {
  test('sdx', () => {
    expect(sodoixung(0)).toBe(undefined);
    expect(sodoixung(0)).toBe(undefined);
    expect(sodoixung(1)).toBe(false);
    expect(sodoixung(2)).toBe(false);
    expect(sodoixung(3)).toBe(false);
    expect(sodoixung(4)).toBe(false);
    expect(sodoixung(11)).toBe(true);
    expect(sodoixung(13)).toBe(false);
    expect(sodoixung(111)).toBe(true);
    expect(sodoixung(1232321)).toBe(undefined);
  });
  
});