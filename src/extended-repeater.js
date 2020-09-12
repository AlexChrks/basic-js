const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  //  _______________________________________________________Requirements
  if (options.separator == undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }

  if (typeof str != 'string') {
    str = str + '';
  }

  if (typeof options.addition != 'string' && options.hasOwnProperty('addition')) {
    options.addition = options.addition + '';
  }

  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  // __________________________________________________________________


  // _______________________________________________________Addition string

  let extraArr = [];

  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    extraArr.push(options.addition);
  }

  let additionalString = extraArr.reduce((acc, item, index) => {
    if (index == 0) {
      return acc += `${item}`;
    }
    else {
      return acc += `${options.additionSeparator}${item}`
    }
  }, '');


  // _________________________________________________________________

  // _______________________________________________________Main string
  let mainStr = '';
  let mainArr = [];

  if (options.hasOwnProperty('addition')) {
    mainStr = str + additionalString;
  }
  else {
    mainStr = str;
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    mainArr.push(mainStr);
  }

  let completeString = mainArr.reduce((acc, item, index) => {
    if (index == 0) {
      return acc += item;
    }
    else {
      return acc += options.separator + item;
    }

  }, '');
  // _________________________________________________________________
  return completeString;
}

