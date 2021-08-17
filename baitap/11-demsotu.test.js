import { demsotu } from "./11-demsotu";


describe('tes dem so tu', () => {
  it('neu ko nhap', () => {
    expect(demsotu('')).toEqual(0);
  });
  it('neu nhap', () => {
    expect(demsotu('nguyen duong')).toEqual(2);
    expect(demsotu('nguyen    duong')).toEqual(2);
  });
});