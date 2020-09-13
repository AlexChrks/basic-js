const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
  }

  encrypt(message, key) {
    // __________________________________________________Forming alphabetArray
    let alphabetArr = [];
    for (let i = 97; i <= 122; i++) {
      alphabetArr.push(String.fromCharCode(i));
    }
    // __________________________________________________
    // __________________________________________________Forming keyString

    let keyWordArr = [];

    key = key.toLowerCase();

    for (let i = 0; i < key.length; i++) {
      if (alphabetArr.includes(key[i])) {
        keyWordArr.push(key[i]);
      }
    }
    // __________________________________________________
    // __________________________________________________MainString

    let mainPhrase = [];
    let removedElements = [];
    let removedElementsIndexes = [];

    message = message.toLowerCase();

    for (let i = 0; i < message.length; i++) {
      if (alphabetArr.includes(message[i])) {
        mainPhrase.push(message[i])
      }
      else {
        removedElements.push(message[i]);
        removedElementsIndexes.push(i);
      }
    }
    // __________________________________________________
    // __________________________________________________Balance MainPhrase and KeyWord
    if (mainPhrase.length > keyWordArr.length) {
      let difference = mainPhrase.length - keyWordArr.length;

      for (let i = 0; i < difference; i++) {
        keyWordArr.push(keyWordArr[i]);
      }
    }
    else if (keyWordArr.length > mainPhrase.length) {
      keyWordArr = keyWordArr.slice(0, mainPhrase.length);
    }

    // __________________________________________________
    // __________________________________________________Encryption logic
    let encryptedArr = [];
    let encryptedCharIndex = 0;

    for (let i = 0; i < mainPhrase.length; i++) {
      encryptedCharIndex = alphabetArr.indexOf(mainPhrase[i]) + alphabetArr.indexOf(keyWordArr[i]);

      if (encryptedCharIndex > alphabetArr.length - 1) {
        encryptedArr.push(alphabetArr[encryptedCharIndex - alphabetArr.length]);
      }
      else {
        encryptedArr.push(alphabetArr[encryptedCharIndex]);
      }

    }
    // __________________________________________________
    // __________________________________________________Addition Symbols and whiteSpaces

    for (let i = 0; i < removedElements.length; i++) {
      encryptedArr.splice(removedElementsIndexes[i], 0, removedElements[i]);
    }
    // __________________________________________________
    // __________________________________________________finalString

    let encryptedString = encryptedArr.join('').toUpperCase();
    if (this.bool == false) {
      return encryptedString.split('').reverse().join('');
    }
    return encryptedString;
    // _____________________________________________________
  }

  // _________________________________________________________________________________________________________________________________________________________
  // _________________________________________________________________________________________________________________________________________________________


  decrypt(encryptedMessage, key) {
    // __________________________________________________Forming alphabetArray
    let alphabetArr = [];

    for (let i = 97; i <= 122; i++) {
      alphabetArr.push(String.fromCharCode(i));
    }
    // __________________________________________________

    // __________________________________________________Forming keyString

    let keyWordArr = [];

    key = key.toLowerCase();
    for (let i = 0; i < key.length; i++) {
      if (alphabetArr.includes(key[i])) {
        keyWordArr.push(key[i]);
      }
    }
    // __________________________________________________
    // __________________________________________________MainString

    let mainPhrase = [];
    let removedElements = [];
    let removedElementsIndexes = [];

    encryptedMessage = encryptedMessage.toLowerCase();

    for (let i = 0; i < encryptedMessage.length; i++) {

      if (alphabetArr.includes(encryptedMessage[i])) {
        mainPhrase.push(encryptedMessage[i])
      }
      else {
        removedElements.push(encryptedMessage[i]);
        removedElementsIndexes.push(i);
      }
    }
    // __________________________________________________

    // __________________________________________________Balance MainPhrase and KeyWord
    if (mainPhrase.length > keyWordArr.length) {
      let difference = mainPhrase.length - keyWordArr.length;

      for (let i = 0; i < difference; i++) {
        keyWordArr.push(keyWordArr[i]);
      }
    }

    else if (keyWordArr.length > mainPhrase.length) {
      keyWordArr = keyWordArr.slice(0, mainPhrase.length);
    }

    // __________________________________________________
    // __________________________________________________Encryption logic
    let decryptedArr = [];
    let decryptedCharIndex = 0;

    for (let i = 0; i < mainPhrase.length; i++) {
      decryptedCharIndex = alphabetArr.indexOf(mainPhrase[i]) - alphabetArr.indexOf(keyWordArr[i]);

      if (decryptedCharIndex < 0) {
        decryptedArr.push(alphabetArr[decryptedCharIndex + alphabetArr.length]);
      }
      else {
        decryptedArr.push(alphabetArr[decryptedCharIndex]);
      }
    }
    // __________________________________________________
    // __________________________________________________Addition Symbols and whiteSpaces

    for (let i = 0; i < removedElements.length; i++) {
      decryptedArr.splice(removedElementsIndexes[i], 0, removedElements[i]);
    }
    // __________________________________________________
    // __________________________________________________finalString

    let decryptedString = decryptedArr.join('').toUpperCase();
    if (this.bool == false) {
      return decryptedString.split('').reverse().join('');
    }
    return decryptedString;
    // __________________________________________________
  }
}
module.exports = VigenereCipheringMachine;

