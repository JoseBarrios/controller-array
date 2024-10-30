// Main entry point
const Model = require('../../mvc-model/src/MVCModel');

class ModelArray extends Model{
  constructor(array = []) {
      super(array)
    this.array = array;
  }

  //Time Complexity: O(n), because each element in the array is checked once.
  //Space Complexity: O(1), as only a constant amount of extra space is needed.
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

  //Time Complexity: O(n), because each element in the array is checked once.
  //Space Complexity: O(1), as only a constant amount of extra space is needed.
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

    //Time Complexity: 
    //Space Complexity:
    findAPeak() {
    // A peak is defined as an element that is greater than or equal to its neighbors 
    //1. Choose the middle column of the 2D array.
	//2. Find the global maximum element in the middle column.
	//3. Check if the maximum element in this column is a peak

    }
}

module.exports = ModelArray;
