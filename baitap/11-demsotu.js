// STRING-01: Ðếm số từ có trong câu
// Viêt hàm countWords(str) để đếm số từ có trong str.
// Ví dụ: countWords('easy frontend') --> 2

export function demsotu(str) {
if(str==='') return 0;

return str.split(' ').filter(x=>x!=='').length
};
// console.log(demsotu('nguyen trong duong  '))