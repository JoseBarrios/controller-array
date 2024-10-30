const ModelArray = require('../src/ModelArray');

describe('ModelArray', () => {
  let cArray;

  beforeEach(() => {
    const array = [10, 1, 2, 3, 0, -1, 5];
    cArray = new ModelArray(array);
  });

  test('should return the largest numeric value in an array', () => {
    expect(cArray.findMax()).toBe(10);
  });

  test('should return the largest numeric value in an array', () => {
    expect(cArray.findMin()).toBe(-1);
  });
});
