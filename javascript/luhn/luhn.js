//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  let inputArr = input.replace(/\s/g, '').split('') // Remove whitespaces and then convert to array
  
  if (inputArr.length == 1 && inputArr[0] == '0') return false // Check for single 0 entries
  
  inputArr.forEach((element, index) => {
    let val = element
    if(inputArr.length % 2 == 0){ //If Even length
      if (index % 2 == 0) val = element * 2  
    } else { // If odd length
      if (index % 2 == 1) val = element * 2  
    }
    val > 9 ? val -= 9 : val
    inputArr[index] = val
  })

  // Converts to array of numbers and gets sum
  let sum = inputArr.map(num => +num).reduce((acc, cur) => acc += cur) 
  return sum % 10 == 0
};
