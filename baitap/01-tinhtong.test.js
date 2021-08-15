// const sum = require('./01-tinhtong');
import{ sum, sumNumber } from './01-tinhtong';

test('kiem tra', () => {
  expect(sum(1, 2)).toBe(3);
});

test('tinh tong', () => {
  expect(sum(3,4)).toBe(7);
});

describe('tong day  so', () => {
  test('sumNumber ', () => {
    expect(sumNumber(1)).toBe(1);
    expect(sumNumber("a")).toBe(undefined);
    expect(sumNumber(2)).toBe(3);
    expect(sumNumber(3)).toBe(6);
  });
});