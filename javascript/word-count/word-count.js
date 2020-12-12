//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  let words = string.match(/[\w'\\]+/g)
                    .filter(x => x) //Get rid of any whitespace from regex
                    .map(x => x.toLowerCase()) //Ensure all words are lowercase
                    .map(x => x[0] == "'" && x[x.length - 1] ? x.slice(1, -1) : x); //Remove quotations
  let wordCounts = {};
  for(let word of words)
    word in wordCounts ? wordCounts[word] += 1 : wordCounts[word] = 1;
  return wordCounts;
};


