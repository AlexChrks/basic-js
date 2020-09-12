const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, depth = 1, depthArr = []) {

    depthArr.push(depth);

    for (let item of arr) {

      if (Array.isArray(item)) {
        this.calculateDepth(item, depth + 1, depthArr);
      }
      
    }
    return Math.max(...depthArr);
  }
}


