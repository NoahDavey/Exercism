//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (collection, accumulator) => {
  const out = []
  for(const element of collection) {
    out.push(accumulator(element))
  }
  return out
};
