//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    for(let i = 0; i < list.length(); i++)
      this.values[this.length()] = list.values[i];
    return this;
  }

  concat(listOfLists) {
    for(let list of listOfLists.values)
      this.append(list);
    return this;
  }

  filter(predicate) {
    let filteredValues = []
    for(let value of this.values) 
      if(predicate(value)) filteredValues[filteredValues.length] = value;
    this.values = filteredValues;
    return this;
  }

  map(func) {
    for(let i = 0; i < this.length(); i++)
      this.values[i] = func(this.values[i]);
    return this;
  }

  length() {
    let count = 0;
    for(let item of this.values)
      count++;
    return count;
  }

  foldl(func, init) {
    let acc = init;
    for(let i = 0; i < this.length(); i++)
      acc = func(acc, this.values[i]);
    return acc;
  }

  foldr(func, init) {
    let acc = init;
    for(let i = this.length() - 1; i >= 0; i--)
      acc = func(acc, this.values[i]);
    return acc;
  }

  reverse() {
    let reversedValues = []
    for(let i = this.length() - 1; i >= 0; i--)
      reversedValues.push(this.values[i]);
    this.values = reversedValues;
    return this;
  }
}
