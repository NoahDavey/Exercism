//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(numberSeries) {
    this._numberSeries = numberSeries  
  }

  get digits() {
    return this._numberSeries.split('').map(x => Number(x))
  }

  slices(numSlices) {
    if(numSlices > this.digits.length) throw new Error('Slice size is too big.')
    let subSeries = []
    for(let i = 0; i <= this.digits.length - numSlices; i++) {
      subSeries.push(this.digits.splice(i, numSlices))
    }
    return subSeries
  }
}