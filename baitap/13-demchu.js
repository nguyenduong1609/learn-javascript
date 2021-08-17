// STRING-03: Thống kê ký tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của key

export function soluongchu(str) {
  if (str === "") return {};
  let kqua = {};
  str
    .split("")
    .map((x) => {
      if (x === " ") {
        return x.replace(" ", "space");
      } else return x;
    })
    .forEach((a) => {
      if (kqua[a]) {
        kqua[a] += 1;
      } else kqua[a] = 1;
    });

  return kqua;
}

// console.log(soluongtu("nguyen duong nguyen"));


// const mn = [" ", "n", "e", " "].map((x) => {
//   if (x === " ") {
//     return x.replace(" ", "hhhh");
//   } else return x;
// });
// console.log(mn);
