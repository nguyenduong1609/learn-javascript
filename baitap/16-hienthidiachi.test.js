import { hienthidiachi } from "./16-hienthidiachi";

describe('hien thi dia chi', () => {
  it('schc10', () => {
    expect(hienthidiachi('')).toEqual({});
    expect(hienthidiachi({
      number: 123,
      street: 'Nguyen Cong Tru',
      ward: 'Ward 11',
      district: 'Binh Thanh District',
      city: 'HCMC'
      })).toEqual('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
    expect(hienthidiachi({
      street: 'Nguyen Cong Tru',
      district: 'Binh Thanh District'
      })).toEqual('Nguyen Cong Tru, Binh Thanh District');
  });
  
});