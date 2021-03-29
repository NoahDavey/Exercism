const isAnagram = (word, anagram) => {
  const wordArr = word.toLowerCase().split('')
  const anagramArr = anagram.toLowerCase().split('')

  // To be an anagram, must have same amount of letters
  if(wordArr.length !== anagramArr.length) return false
  // Word is not an anagram of itself
  if(word.toLowerCase() === anagram.toLowerCase()) return false

  for (const letter of anagramArr) {
      const repeatedLettersWord = wordArr.filter(x => x === letter).length
      const repeatedLettersAnagram = anagramArr.filter(x => x === letter).length
      if (repeatedLettersWord !== repeatedLettersAnagram) return false
      if(!wordArr.includes(letter)) return false
  }
  return true
}

export const findAnagrams = (word, anagramList) => {
  const out = []

  for (const anagram of anagramList) {
      if(isAnagram(word, anagram)){
          out.push(anagram)
      }
  }

  return out
};