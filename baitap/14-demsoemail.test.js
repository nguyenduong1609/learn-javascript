import { demsoemail } from "./14-demsoemail";



describe("tes dem so email", () => {
  it("neu ko nhap", () => {
    expect(demsoemail("")).toEqual(0);
  });
  it("neu nhap", () => {
    expect(demsoemail('my email should be abc@super.com')).toEqual(1);
    expect(demsoemail('my email should be easy@frontend.com or easy@frontend.com.vn or')).toEqual(2);
    // expect(demsoemail("nguyen duong nguyen duong")).toEqual({
    //   nguyen: 2,
    //   duong: 2,
    // });
  });
});