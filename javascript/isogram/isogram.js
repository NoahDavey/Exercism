//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  const normalizedInput = input.replaceAll(/[ -]/g, '').toLowerCase()
  const normalizedInputSet = new Set(normalizedInput)
  return normalizedInputSet.size === normalizedInput.length ? true : false
};
