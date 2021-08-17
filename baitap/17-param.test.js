import { param } from "./17-param";

describe('duongdan', () => {
  it('schc10', () => {
    expect(param('', '')).toEqual('');
    expect(param('/products/:productId', { productId: 123 })).toEqual('/products/123');
    expect(param('/categories/:categoryId/products/:productId', { productId: 2 })).toEqual('/categories/:categoryId/products/2');
  });
  
});