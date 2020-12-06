//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if(key)
      this.key = key;
    else {
      this.key = getRandKey(100);
    }
  }

  encode(plainText) {
    let keyArr = Array.from(this.key);
    let plainTextArr = Array.from(plainText);
    let cipherTextArr = [];

    for(let i = 0; i < plainTextArr.length; i++){
      cipherTextArr[i] = changeChar(plainTextArr[i], getDist(keyArr[i % keyArr.length]), true);
    }

    return cipherTextArr.join("");
  }

  decode(cipherText) {
    let keyArr = Array.from(this.key);
    let cipherTextArr = Array.from(cipherText);
    let plainTextArr = [];

    for(let i = 0; i < cipherTextArr.length; i++){
      plainTextArr[i] = changeChar(cipherTextArr[i], getDist(keyArr[i % keyArr.length]), false);
    }

    return plainTextArr.join("");
  }

  set key(key) {
    this._key = key;
  }

  get key() {
    return this._key;
  }
}

//Function used to change a character given a numeric distance
function changeChar(ch, dist, encode=true) {
  let alphabetStart = "a".charCodeAt(0);
  let alphabetEnd = "z".charCodeAt(0);
  let newChar = ch.charCodeAt(0);
  encode ? newChar += dist : newChar -= dist; //If encode is true, add to the char code, else subtract

  if (newChar > alphabetEnd && encode) { // Does the character go past z
    let delta = newChar - alphabetEnd
    newChar = alphabetStart + delta - 1;
  } else if (newChar < alphabetStart && !encode) { //Does the character go before a
  let delta = alphabetStart - newChar;
  newChar = alphabetEnd - delta + 1;
  }
  return String.fromCharCode(newChar);
}

//Returns the numerical distance to move a character based on a given key char
function getDist(keyChar){
  let alphabetStart = "a".charCodeAt(0);
  return keyChar.charCodeAt(0) - alphabetStart;
}

function getRandKey(length){
  let alphabetStart = "a".charCodeAt(0);
  let alphabetEnd = "z".charCodeAt(0);
  let keyCharCodes = []
  for(let i = 0; i < length; i++) {
    let charCode = Math.floor(Math.random() * (alphabetEnd - alphabetStart)) + alphabetStart
    keyCharCodes[i] = String.fromCharCode(charCode);
  }
  return keyCharCodes.join("");
}