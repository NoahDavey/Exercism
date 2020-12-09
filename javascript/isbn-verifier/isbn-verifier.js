//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Return 10 for 'X' or the number otherwise
const maskX = (character) => character === 'X' ? 10 : character

export const isValid = (isbn) => {
  // Get an array of the characters without dashes
  let isbnCharacters = isbn.split('').filter(x => x != '-') 

  // X can only be valid as a 'check digit'
  if(isbnCharacters.includes('X') && isbnCharacters[isbnCharacters.length - 1] != 'X')
    return false
  // Must be 10 digits long
  if(isbnCharacters.length !== 10)
    return false

  // Variables for calculating the isbn validity
  let isbnMultiplier = 10
  let isbnTotal = 0
  for(const char of isbnCharacters) {
    let maskedChar = Number(maskX(char))
    isbnTotal += maskedChar * isbnMultiplier
    isbnMultiplier--
  }

  if(isbnTotal % 11 == 0) return true
  else return false
};
