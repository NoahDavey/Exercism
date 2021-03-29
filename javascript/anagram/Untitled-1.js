//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const isAnagram = (word, anagram) => {
    const wordArr = word.toLowerCase().split('')
    const anagramArr = anagram.toLowerCase().split('')
    console.log(wordArr);
    console.log(anagramArr);

    // To be an anagram, must have same amount of letters
    if(wordArr.length !== anagramArr.length) return false
    // Word is not an anagram of itself
    if(word === anagram) return false

    for(const letter of anagramArr) {
        console.log(letter);
        const letterIdx = wordArr.indexOf(letter)
        console.log(letterIdx);
        if(letterIdx >= 0) { // If the letter from anagram exists in word
            const res = anagramArr.splice(letterIdx, 1)
            const res1 = wordArr.splice(letterIdx, 1)
            console.log(res);
            console.log(res1);
        }


        console.log(wordArr);
        console.log(anagramArr);
    }
}

export const findAnagrams = (word, anagramList) => {
    const out = []



    return out
};

console.log(isAnagram('wow', 'woe'))
const a = findAnagrams('hey', ['eyh', 'aasd'])


const b = [1, 2, 3, 4, 5]

const rem = b.splice(0, 1)
console.log(rem);
console.log(b);