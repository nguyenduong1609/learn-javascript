import { soluongchu } from "./13-demchu";



describe("tes dem so chu", () => {
  it("neu ko nhap", () => {
    expect(soluongchu("")).toEqual({});
  });
  it("neu nhap", () => {
    expect(soluongchu("nn on")).toEqual({ n: 3, space: 1, o: 1 });
    // expect(soluongchu("nguyen    duong")).toEqual({ nguyen: 1, duong: 1 });
    // expect(soluongchu("nguyen duong nguyen duong")).toEqual({
    //   nguyen: 2,
    //   duong: 2,
    // });
  });
});