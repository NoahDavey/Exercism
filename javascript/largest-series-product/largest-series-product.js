//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, numDigits) => {
  if(input.length < numDigits) throw new Error('Span must be smaller than string length')
  if(numDigits < 0) throw new Error('Span must be greater than zero')
  if(/[A-Za-z]/.test(input)) throw new Error('Digits input must only contain digits')

  input = input.split('')
  let results = []
  for(let i = 0; i <= input.length - numDigits; i++) {
    let spanProduct = 1
    for(let j = i; j < numDigits + i; j++) spanProduct *= input[j]
    results.push(spanProduct)
  }
  return results.reduce((acc, cur) => acc > cur ? acc : acc = cur)
};
