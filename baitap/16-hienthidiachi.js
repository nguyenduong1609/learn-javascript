// STRING-06: Hiển thị địa chỉ người dùng
// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
// chuỗi address hoàn chỉnh
// Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
// Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.


export function hienthidiachi(obj) {
  if (obj === '') return {};
  let sonha = obj.number
  let duong = [obj.street, obj.ward, obj.district, obj.city].filter(x => !!x).join(', ');
  if (sonha===undefined) return duong;
  return sonha + ' ' + duong
}
// console.log(
//   hienthidiachi({
//     number: 123,
//     street: 'Nguyen Cong Tru',
//     ward: 'Ward 11',
//     district: 'Binh Thanh District',
//     // city: 'HCMC'
//   })
// );
