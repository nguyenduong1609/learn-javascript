// STRING-04: Ðếm số lượng email có trong câu
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào
// countEmails('my email should be abc@super.com') --> 1
// countEmails('my email should be a@a.com') --> 0
// countEmails('my email should be @ bla .com') --> 0
// countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or
// easy@frontend.vn') --> 3
export function demsoemail(str) {
  if (str === '') return 0;

  return str.split(' ').filter((x) => 
    x !== ' ' &&
      x.includes('@') &&
      x.indexOf('@') > 2 &&
      (x.endsWith('.com') || x.endsWith('.vn') || x.endsWith('.com.vn')) &&
      x.indexOf('.') - x.indexOf('@') > 3
  ).length;
}
console.log(demsoemail(' ccabc@super.com ccabc@super.com ccabc@ger.com and nhgssg@kh.csd nguy en@super.com.vn'));