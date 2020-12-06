//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const knownNumbers = {
  0: [ 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0 ],
  1: [ 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0 ],
  2: [ 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ],
  3: [ 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0 ],
  4: [ 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0 ],
  5: [ 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0 ],
  6: [ 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0 ],
  7: [ 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0 ],
  8: [ 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
  9: [ 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0 ],

} 

export const convert = (input) => {
  let output = ''

  const rows = input.split('\n')
  const totalCols = rows[0].length
  const totalRows = rows.length
  const rowHeight = 4
  const colWidth = 3
  const totalCharacterRows = (totalRows / rowHeight)
  const totalCharacterCols = (totalCols / colWidth)

  let inputNumberArray, indexCounter
  // Loop over each character row - [1 2 3]
  for(let charRow = 0; charRow < totalCharacterRows; charRow++) {
    const charRowStart = charRow * 4
    const charRowEnd = charRowStart + 4
    const characterRow = rows.slice(charRowStart, charRowEnd)

    // Looper over each character - 1 then 2 then 3
    for(let charCol = 0; charCol < totalCharacterCols; charCol++) {
      const charColStart = charCol * 3
      const charColEnd = charColStart + 3

      // Reset variables
      inputNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      indexCounter = 0
      // Loop over rows and cols of individual char
      for(const individualCharRow of characterRow) {
        for(const individualCharCol of individualCharRow.slice(charColStart, charColEnd)) {
          if(!/\s/.test(individualCharCol)) {
            inputNumberArray[indexCounter] += 1
          }
          indexCounter++
        }
      }

      // Check if input number matches known numbers
      let match = false
      for(const num in knownNumbers) {
        let knownNumber = knownNumbers[num]
        let inputNumber = inputNumberArray
        
        // Compare numbers
        if(JSON.stringify(knownNumber) === JSON.stringify(inputNumber)) {
          output += String(num)
          match = true
        }
      }
      // Character being observed doesn't match known characters
      if(!match) output += '?'
    }
    // If more than one row && not on the last row
    if(totalCharacterRows > 1 && charRow < totalCharacterCols - 1) output += ','
  }
  return output
};
