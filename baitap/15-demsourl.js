// STRING-05: Ðếm số lượng url có trong câu
// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong câu.

export function demsourl(str) {
  if (str.length === 0) return 0;
  let stringex = str;
  const bd = stringex
    .split(' ')
    .filter(
      (x) =>
        x !== ' ' &&
        (x.startsWith('http://') ||
          x.startsWith('https://') ||
          x.startsWith('ws://') ||
          x.startsWith('wss://')) &&
          (x.includes('.com') || x.includes('.vn') || x.includes('.com.vn')) &&
          x.indexOf('.') - x.indexOf('@') > 3
    );

  return bd.length;
}
// console.log(
//   demsourl('my website is: https://ezfrontend.com  ws://ezfrontend.com you can visit it')
// );
