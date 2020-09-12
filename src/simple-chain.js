const CustomError = require("../extensions/custom-error");

const chainMaker = {

  currentChain: [],

  getLength() {
    return this.currentChain.length;
  },

  addLink(value) {
    this.currentChain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && position < this.getLength() && position >= 1) {
      this.currentChain.splice(position - 1, 1);
      return this;
    }
    else {
      this.currentChain = [];
      throw new Error('invalid value');
    }
  },

  reverseChain() {
    this.currentChain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.currentChain.reduce((acc, item, index) => {
      if (index === 0) {
        return acc += `( ${item} )`;
      }
      else {
        return acc += `~~( ${item} )`
      }
    }, '');
    this.currentChain = [];
    return finalChain;
  }

}

module.exports = chainMaker;
