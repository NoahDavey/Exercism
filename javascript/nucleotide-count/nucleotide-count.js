//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(dna) {
    if(/[^ACGT]/.test(dna)) // Checks for characters that aren't A, C, G or T
      throw new Error('Invalid nucleotide in strand')
    let A, C, G, T;
    let stringArr = dna.split("")
    A = count(stringArr, 'A')
    C = count(stringArr, 'C')
    G = count(stringArr, 'G')
    T = count(stringArr, 'T')
    return `${A} ${C} ${G} ${T}`
  }
}

const count = (stringArr, nucleotide) => stringArr.filter(letter => letter === nucleotide).length 
