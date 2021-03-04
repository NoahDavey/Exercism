//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isPrime(num) {
  if(num === 0 || num === 1) {
    return false
  }

  for(let i = 2; i < num; i++) {
      if(num % i === 0) return false
  }
  return true
}

export const primeFactors = (number) => {
  const factors = []

  // Find the first prime from 0
  // Divide that by the input if possible, 
  // If not check the next highest prime number
  // If successful add number to factors list
  let current = number
  for(let i = 2; i <= current; i++) {
    if(isPrime(i) && current % i === 0) {
      current /= i
      factors.push(i)
      i--
    }
  }

  return factors
};
