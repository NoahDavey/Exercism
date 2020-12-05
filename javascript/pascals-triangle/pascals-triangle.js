//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (totalRows) => {
  let triangle = [];
  if (totalRows == 0) return [];

  for(let i = 1; i <= totalRows; i++) {
    let row = [];
    row[0] = 1; row[i-1] = 1;

    for(let j = 1; j < i - 1; j++) {
      row[j] = triangle[i-2][j-1] + triangle[i-2][j];
    }
    triangle[i-1] = row;
  }
  return triangle;
};

