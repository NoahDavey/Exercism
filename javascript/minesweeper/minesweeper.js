export const annotate = (input) => {

  if(!input.join('')) {
      return input
  }

  const mineField = input.join('').split('')
  const cols = (input.length && input[0].length)
  const rows = input.length
  const getMinefieldIdx = (row, col) => (row * cols + col)
  const checkSurroundingSquares = (mineIdx, i, j) => {
      let count = 0
      for(let x = i - 1 ; x <= i + 1; x++) {
          for(let y = j - 1; y <= j + 1; y++) {
              // console.log(x, y);
              const middleSquare = (x === i && y === j) 
              if(!middleSquare && mineField[getMinefieldIdx(x, y)] === '*') {
                  count++;
              }
          }
      }

      return count
  }

  for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
          const mineIdx = getMinefieldIdx(i, j)
          if(mineField[mineIdx] === '*') {
              // If looking at a mine, should do nothing
          } else {
              const surroundingMines = checkSurroundingSquares(mineIdx, i, j)
              if(surroundingMines) {
                  mineField[mineIdx] = surroundingMines
              }
          }
      }
  }

  const pattern = new RegExp('(.{'+ rows +'})', 'g')
  return mineField.join('').split(pattern).filter(x => x)
};
