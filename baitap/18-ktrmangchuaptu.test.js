import { hasAlice, hasStudent, isIncreasingNumberList, isSymmetricList, ktramangcchuaptu, ktratruthy, ktratutrongmang, solechiahetcho3 } from "./18-ktramangchuaptu";

describe('ktra', () => {
  test('ktramang ', () => {
    expect(ktramangcchuaptu("a", 2)).toBe(false);
    expect(ktramangcchuaptu([1],'s')).toBe(false);
    expect(ktramangcchuaptu([2,3,4],4)).toBe(true);
    expect(ktramangcchuaptu([4,3,1,0,-1], 0)).toBe(true);
    expect(ktramangcchuaptu([4, 3, 111], 2)).toBe(false);
    
  });
});

describe('ktra nguyen duong trong mang', () => {
  test('ktramang ', () => {
    expect(ktratutrongmang("a")).toBe(false);
    expect(ktratutrongmang(['nguyen', 'd'])).toBe(false);
    expect(ktratutrongmang(['nguyen duong'])).toBe(true);
    expect(ktratutrongmang(['duong','nguyen'])).toBe(true);
    expect(ktratutrongmang(['d', 'dhochohc'])).toBe(false);
    
  });
});


describe('ktra truthy', () => {
  test('ktramang ', () => {
    expect(ktratruthy("a")).toBe(false);
    expect(ktratruthy([0, 1])).toBe(true);
    expect(ktratruthy(['duong','nguyen'])).toBe(true);
    expect(ktratruthy(['', undefined])).toBe(false);
    
  });
});

describe('ktra hs co so id cho trc', () => {
  test('should ', () => {
    expect(hasStudent([
      { id: 1, name: 'Easy' },
      { id: 2, name: 'Frontend' },
      ], 1)).toBe(true);
  });
  test('should ', () => {
    expect(hasStudent('dd', 1)).toBe(false);
  });
  test('should ', () => {
    expect(hasStudent([
      { id: 1, name: 'Easy' },
      { id: 2, name: 'Frontend' },
      { id: 3, name: 'Frontend' },
      { id: 4, name: 'Frontend' },
      ], 6)).toBe(false);
  });
});

describe('ktra hs Aler la nu', () => {
  test('should ', () => {
    expect(hasAlice([
      { id: 1, name: 'Alice', gender: 'male' },
      { id: 2, name: 'aliCE', gender: 'female' },
      { id: 3, name: 'Easy Frontend', gender: 'male' },
      ])).toBe(true);
  });
  test('should ', () => {
    expect(hasAlice('dd')).toBe(false);
  });
  test('should ', () => {
    expect(hasAlice([
      { id: 1, name: 'Easy', gender: 'male' },
      { id: 2, name: 'Frontend', gender: 'male' },
      { id: 3, name: 'Frontend', gender: 'male' },
      { id: 4, name: 'Frontend' },
      ], 6)).toBe(false);
  });
});

describe('ktra mang tang dan', () => {
  test('ktramang ', () => {
    expect(isIncreasingNumberList("a")).toBe(false);
    expect(isIncreasingNumberList([1])).toBe(false);
    expect(isIncreasingNumberList([2,3,4])).toBe(true);
    expect(isIncreasingNumberList([4,3,1,0,-1])).toBe(false);
    expect(isIncreasingNumberList([4, 3, 111])).toBe(false);
    
  });
});

describe('ktra mang doi xung', () => {
  test('ktramang ', () => {
    expect(isSymmetricList("a")).toBe(false);
    expect(isSymmetricList([1])).toBe(false);
    expect(isSymmetricList([2,3,2])).toBe(true);
    expect(isSymmetricList([4,3,1,0,-1])).toBe(false);
    expect(isSymmetricList([4, 3, 111])).toBe(false);
    
  });
});