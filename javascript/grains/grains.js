//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (n) => {
  if (n <= 0 || n >= 65) throw new Error('square must be between 1 and 64')
  return 2n ** BigInt(n - 1)
};

export const total = () => {
  let total = 0n
  for(let i = 1; i <= 64; i++)
    total += square(i)
  return total
};
