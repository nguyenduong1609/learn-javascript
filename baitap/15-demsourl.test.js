import { demsourl } from "./15-demsourl";



describe('dem so tu trong cau', () => {
  it('phai la str', () => {
    expect(demsourl('')).toEqual(0);
    // expect(demsourl([0])).toEqual(0);
  });
  it('phai la str', () => {
    expect(demsourl('my website is: http://ezfrontend.com/nhuyen you can visit it')).toEqual(1);
    expect(demsourl('my website is: ttp://ezfrontend.com you can visit it')).toEqual(0);
    expect(demsourl('my website is: http://ezfrontend.com you can visit it')).toEqual(1);
  });
});