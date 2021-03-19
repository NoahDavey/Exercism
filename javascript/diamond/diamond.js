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


  for (let index = 0; index <= Math.floor(diamond.length / 2); index++) {
      const outsideSpaces = Math.abs(letterNum - index)
      if(index === 0 || index === diamond.length - 1) {
          diamond[index] = ' '.repeat(outsideSpaces) + diamond[index] + ' '.repeat(outsideSpaces)
          diamond[diamond.length - 1 - index] = ' '.repeat(outsideSpaces) + diamond[diamond.length -1- index] + ' '.repeat(outsideSpaces)
      } else {
          const insideSpaces = index * 2 - 1
          diamond[index] = ' '.repeat(outsideSpaces) + diamond[index] + ' '.repeat(insideSpaces) + diamond[index] + ' '.repeat(outsideSpaces)
          if(index != Math.floor(diamond.length / 2)) {
              diamond[diamond.length - 1 -index] = ' '.repeat(outsideSpaces) + diamond[diamond.length - 1 -index] + ' '.repeat(insideSpaces) + diamond[diamond.length - 1 -index] + ' '.repeat(outsideSpaces)
          }
      }
  }

  return diamond
};
