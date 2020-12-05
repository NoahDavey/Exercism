//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaString) => {
  let rnaString = Array.from(dnaString).map(dna => dna_to_rna[dna]).join("");
  return rnaString;
};

const dna_to_rna = {
  "G":"C",
  "C":"G",
  "T":"A",
  "A":"U",
}
