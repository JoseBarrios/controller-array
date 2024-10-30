// Main entry point

class ControllerArray {
  constructor(array = []) {
    this.array = array;
  }

  findMax() {
    let max = -Infinity;
    for (let i = 0; i < this.array.length; i++) {
      const item = this.array[i];
      if (max < item) {
        max = item;
      }
    }
    return max;
  }

  findMin() {
    let min = Infinity;
    for (let i = 0; i < this.array.length; i++) {
      const item = this.array[i];
      if (item < min) {
        min = item;
      }
    }
    return min;
  }
}

module.exports = ControllerArray;
