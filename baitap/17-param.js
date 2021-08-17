// STRING-07: Thay thế params thành value tương ứng
// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.

// fillPath('/products/:productId', { productId: 123 }); // '/products/123'
// fillPath('/categories/:categoryId/products/:productId', 
// {
// categoryId: 1,
// productId: 2
// });
// should return '/categories/1/products/2'
// fillPath('/categories/:categoryId/products/:productId', { productId: 2 });
// should return '/categories/:categoryId/products/2


export function param(path, params){
  if(path ==='' || params ==={}) return '';

  let duongdan = path;
  const keyList =Object.keys(params);
  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    const keytt = ':' + keyList[i];
    if (path.indexOf(keytt)>=0) duongdan=duongdan.replace(keytt, params[key])
  };
  return duongdan;

};

// console.log(param('/categories/:categoryId/products/:productId', { productId: 2 }));