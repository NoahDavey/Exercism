//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {  
  constructor(num) {
    this._num = num;
  }

  get sumOfSquares() {
    let total = 0
    for(let i = 1; i <= this._num; i++) {
      total += i ** 2
    }
    this._sumOfSquares = total
    return total
  }

  get squareOfSum() {
    let total = 0
    for(let i = 1; i <= this._num; i++) {
      total += i
    }
    this._squareOfSum = total ** 2
    return total ** 2
  }

  get difference() {
    return this._squareOfSum - this._sumOfSquares
  }
}
