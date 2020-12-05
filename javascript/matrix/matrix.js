//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixStr) {
    this.matrix = []

    for(let row of matrixStr.split('\n')) {
      this.matrix.push(row.split(" ").map(x=>+x));
    }
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    let [row] = this.matrix;
    return row.map((value, column) => this.matrix.map(row => row[column]));
  }
}
