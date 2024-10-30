const ControllerArray = require('../src/ControllerArray');

describe('ControllerArray', () => {
  let cArray;

  beforeEach(() => {
    const array = [10, 1, 2, 3, 0, -1, 5];
    cArray = new ControllerArray(array);
  });

  test('should return the largest numeric value in an array', () => {
    expect(cArray.findMax()).toBe(10);
  });

  test('should return the largest numeric value in an array', () => {
    expect(cArray.findMin()).toBe(-1);
  });
});
