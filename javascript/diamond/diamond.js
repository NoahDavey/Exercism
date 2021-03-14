export const rows = (letter) => {
  const diamond = []
  let letterNum = letter.charCodeAt(0) - 65
  let initialLetter = 'A'.charCodeAt(0) - 65
  const totalRows = letterNum * 2 + 1

  for(let i = 0; i < totalRows; i++) {
    if(i >= Math.floor(totalRows / 2)) {
      // if we are looking at the bottom half
      diamond[i] = String.fromCharCode(initialLetter + 65)
      initialLetter--
  } else {
      // if we are looking at the top half
      diamond[i] = String.fromCharCode(initialLetter + 65)
      initialLetter++
    }
  }

  const spacesNeeded = totalRows - 2

  for(let j = 0; j < Math.ceil(totalRows / 2); j++) {
      console.log(j);
      const currLetter = diamond[j]
      for(let k = 0; k < spacesNeeded; k++) {
          const outerSpaces = ' '.repeat(spacesNeeded - k) 
          diamond[j] = outerSpaces + currLetter + (![0, totalRows].includes(j) ? '' : ' '.repeat(k) + currLetter) + outerSpaces
          // diamond[totalRows - j] = 
      }        
  }

  return diamond
};