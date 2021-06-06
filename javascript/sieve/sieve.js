//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (upperLimit) => {
  const range = {}
  const primes = []
  for(let i = 2; i <= upperLimit; i++) {
    if(!range[i]) {
      primes.push(i)
      let multiply = 1
      let notPrime
      do {
        notPrime = i * multiply++
        range[notPrime] = true
      } while(notPrime < upperLimit)
    }
  }
  return primes
};
