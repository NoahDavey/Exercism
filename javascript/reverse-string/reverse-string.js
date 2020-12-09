//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  if(!string) return string 
  return Array.from(string).reduce((acc, curr) => curr + acc)
};
