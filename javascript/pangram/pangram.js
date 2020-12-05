//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let sentenceArr = Array.from(sentence.toLowerCase());
  let letterMap = new Map();

  for(let character of sentenceArr) {
    //Check if character is letter
    if(isLetter(character)){
      //Check if character isn't already a key in map
      if(!letterMap.has(character)) {
        //Add the character if not
        letterMap.set(character, true);
      } 
    }
  }
  return letterMap.size == 26 ? true : false;
};

function isLetter(character){
  return (/[A-Za-z]/).test(character);
}
