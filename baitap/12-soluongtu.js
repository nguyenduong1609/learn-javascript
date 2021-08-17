// STRING-02: Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

// export function soluongtu(str) {
//   if (str === "") return {};
//   // let kqua = {};
//   return str
//     .split(" ")
//     .filter((x) => x !== "")
//     .reduce((kqua, y) => {
//       if (kqua[y]) kqua[y] += 1;
//       else kqua[y] = 1;
//       return kqua;
//     }, {});
// }

// export function soluongtu(str) {
//   if (str === "") return {};
//   // let kqua = {};
//   return str
//     .split(" ")
//     .filter((x) => x !== "")
//     .reduce((kqua, y) => {
//       kqua[y] = kqua[y] !== undefined ? kqua[y] + 1 : 1;
//       return kqua;
//     }, {});
// }

export function soluongtu(str) {
  if (str === "") return {};
  let kqua = {};
  str
    .split(" ")
    .filter((x) => x !== "")
    .forEach((a) => {
      if (kqua[a]) {
        kqua[a] += 1;
      } else kqua[a] = 1;
    });
  return kqua;
}
// console.log(soluongtu("nguyen duong nguyen"));
