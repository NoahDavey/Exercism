//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (arr) => {
  const out = []
  for (const ele of arr) {
    if(ele instanceof Array) out.push(...flatten(ele))
    else if(!(ele === null || ele === undefined)) out.push(ele)
  }
  return out.length ? out : []
};
