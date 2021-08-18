// ARRAY-CHECK-01: Kiểm tra có số chẵn lớn hơn n trong mảng không
// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không

export function ktramangcchuaptu(arr, n) {
  if (!Array.isArray(arr) || !Number.isFinite(n)) return false;
  return !!arr.filter((x) => x === n).length;
}

// ARRAY-CHECK-02: Kiểm tra có số lẻ và chia hết cho 3 không
// Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
// chia hết cho 3 không?

export function solechiahetcho3(arr) {
  if (!Array.isArray(arr)) return false;
  return !!arr.filter((x) => x % 2 === 1 && x % 3 === 0).length;
}

// ARRAY-CHECK-03: Kiểm tra có từ easy frontend trong mảng không
// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
// không nhé
// Trả về true nếu:
// Một phần tử có chứa cả 2 từ: "easy" và "frontend"
// Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend"
// Ngược lại trả về false

export function ktratutrongmang(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  let mang = [];
  arr.forEach((x) => {
    let ramang = x.split(' ');
    mang = [...mang, ...ramang];
  });

  return mang.indexOf('nguyen') >= 0 && mang.indexOf('duong') >= 0;
}

// console.log(ktratutrongmang(['nguyen duong', 'dka', 'n   h', 'nguen']));

// ARRAY-CHECK-04: Kiểm tra có giá trị truthy nào trong mảng không
// Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?
// hasTruthy([]); // false
// hasTruthy([false, '']); // false
// hasTruthy([false, 123]); // true

export function ktratruthy(arr) {
  if (!Array.isArray(arr)) return false;
  let kq = false;
  arr.forEach((x) => {
    if (Boolean(x)) kq = true;
  });
  return kq;
}

// ARRAY-CHECK-06: Kiểm tra có student có id nào đó trong mảng không
// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
// studentId không?
// const studentList = [
// { id: 1, name: 'Easy' },
// { id: 2, name: 'Frontend' },
// ];
// hasStudent(studentList, 1); // true
// hasStudent(studentList, 3); // false

export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentId === '') return false;

  let kq = false;
  studentList.forEach((x) => {
    if (x.id === studentId) kq = true;
  });
  return kq;
}

// ARRAY-CHECK-07: Kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)
// const studentList = [
// { id: 1, name: 'Alice', gender: 'male' },
// { id: 2, name: 'aliCE', gender: 'female' },
// { id: 3, name: 'Easy Frontend', gender: 'male' },
// ];
// hasAlice(studentList); // true

export function hasAlice(arr) {
  if (!Array.isArray(arr)) return false;
  let kq = false;
  arr.forEach((x) => {
    if (x.name === 'Alice' && x.gender === 'male') kq = true;
  });
  return kq;
}

// ARRAY-CHECK-09: Kiểm tra mảng có tăng dần không
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// . Có ít nhất 2 phần tử.
// . Phần tử sau luôn lớn hơn phần tử trước nó.

export function isIncreasingNumberList(arrNumber) {
  if (!Array.isArray(arrNumber) || arrNumber.length <= 1) return false;
  let arrNumbersort = [...arrNumber].sort((a, b) => a - b);

  let kq = true;
  arrNumbersort.forEach((x, idx) => {
    if (x !== arrNumber[idx]) kq = false;
  });
  // console.log(arrNumber, arrNumbersort);
  return kq;
}

// console.log(isIncreasingNumberList([1, 3, 4, 4, 3]));

// ARRAY-CHECK-11: Kiểm tra mang có đối xứng không
// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
// Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
// Mảng đối xứng phải có ít nhất một phần tử.

export function isSymmetricList(arrNumber) {
  if (!Array.isArray(arrNumber) || arrNumber.length <= 1) return false;

  const longe = arrNumber.length;
  let kq = true;
  for (let i = 0; i < Math.floor(longe / 2); i++) {
    if (arrNumber[i] !== arrNumber[longe - i - 1]) kq = false;
  }

  return kq;
}

// ARRAY-FIND-02: Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
// Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
// Từ cần tìm có độ dài không quá 5
// Từ cần tìm không có chứa khoảng trắng (space)
// Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string.
// findLongestWord([]); // ''
// findLongestWord(['super', 'cool']); // 'super'
// findLongestWord(['super', 'super cool']);
// // 'super' vì từ 'super cool' có chứa khoa ̉ng tră ́ng và có độ dài lớn hơn 5
// nên không tính

 function isSymmetricList(arrString) {
  if (!Array.isArray(arrString) || arrString.length === 0) return '';

  let kq = '';
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length > kq.length && arrString[i].length <= 5 && !arrString[i].includes(' '))
      kq = arrString[i];
  };

  return kq;
};
console.log(isSymmetricList(['ngen', 'duong', 'super cool']))
