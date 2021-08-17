import { tonghaisochiahetx } from "./10-tonghaiso";

describe('tong 2 so chia het cho x', () => {
  test('schc10', () => {
    expect(tonghaisochiahetx(0,1)).toBe(undefined);
    expect(tonghaisochiahetx(3,1)).toBe(undefined);
    expect(tonghaisochiahetx(10,2)).toBe(false);
    expect(tonghaisochiahetx(123,2)).toBe(false);
    expect(tonghaisochiahetx(91, 10)).toBe(true);
    expect(tonghaisochiahetx(13,2)).toBe(false);
    expect(tonghaisochiahetx(181, 9)).toBe(true);
    expect(tonghaisochiahetx(122321, 5)).toBe(true);
  });
  
});