import { soluongtu } from "./12-soluongtu";

// export { soluongtu } from "./12-soluongtu";
describe("tes dem so luong tu", () => {
  it("neu ko nhap", () => {
    expect(soluongtu("")).toEqual({});
  });
  it("neu nhap", () => {
    expect(soluongtu("nguyen duong")).toEqual({ nguyen: 1, duong: 1 });
    expect(soluongtu("nguyen    duong")).toEqual({ nguyen: 1, duong: 1 });
    expect(soluongtu("nguyen duong nguyen duong")).toEqual({
      nguyen: 2,
      duong: 2,
    });
  });
});
