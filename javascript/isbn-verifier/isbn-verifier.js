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

  const isbnTotal = isbnCharacters.reduce((prev, curr, idx) => {
    return prev + (10 - idx) * Number(maskX(curr))
  }, 0)

  return isbnTotal % 11 === 0
};