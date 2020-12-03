//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldVals) => {
  const newVals = {}
  for(const scrabbleScore in oldVals) // Loop over all the scores
    for(const letter of oldVals[scrabbleScore]) { // Loop over letters in that scoreset
      newVals[letter.toLowerCase()] = +scrabbleScore
    }
  return newVals
};
