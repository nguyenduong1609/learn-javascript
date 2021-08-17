import { sotong10 } from "./09-sotong10";

describe('so chia het cho 10', () => {
  test('schc10', () => {
    expect(sotong10(0)).toBe(undefined);
    expect(sotong10(0)).toBe(undefined);
    expect(sotong10(1)).toBe(false);
    expect(sotong10(2)).toBe(false);
    expect(sotong10(3)).toBe(false);
    expect(sotong10(4)).toBe(false);
    expect(sotong10(91)).toBe(true);
    expect(sotong10(13)).toBe(false);
    expect(sotong10(181)).toBe(true);
    expect(sotong10(1232321)).toBe(undefined);
  });
  
});