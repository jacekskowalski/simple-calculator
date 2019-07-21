const { add, multiplicate, subtract, divide } = require('../src/arith');
test('2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('2.34 + 38.978 = 41.318', () => {
  expect(add(2.34, 38.978)).toBeCloseTo(41.318,3);
});

test('3 * 4 = 12', () => {
  expect(multiplicate(3, 4)).toBe(12);
});

test('0,357 * 4.4490 = 1.588293', () => {
  expect(multiplicate(0.357 ,4.4490)).toBeCloseTo(1.588293,6);
});

test('5 - 6 = -1', () => {
  expect(subtract(5, 6)).toBe(-1);
});

test('5.001 - 0.8956 = -1', () => {
  expect(subtract(5.001 ,0.8956)).toBeCloseTo(4.1054,4);
});

test('8 / 4 = 2', () => {
  expect(divide(8, 4)).toBe(2);
});

test('0.7 / 406 = 2', () => {
  expect(divide(0.7 ,406)).toBeCloseTo(0.0017,4);
});