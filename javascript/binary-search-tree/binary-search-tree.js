export class BinarySearchTree {
  constructor(data) {
    this._data = data
    this._left = undefined
    this._right = undefined
  }

  get data() {
    return this._data
  }
  get right() {
    return this._right
  }

  get left() {
    return this._left
  }

  insert(num) {
    const insertLeft = num <= this._data
    if(insertLeft) {
      if(this._left) {
        this._left.insert(num)
      } else {
        this._left = new BinarySearchTree(num)
      }
    } else {
      if(this._right) {
        this._right.insert(num)
      } else {
        this._right = new BinarySearchTree(num)
      }
    }

  }

  each(cbFunc) {
      const currentElement = this
      const left = currentElement.left
      const right = currentElement.right
      
      if(left) left.each(cbFunc)
      cbFunc(currentElement.data)
      if(right) right.each(cbFunc) 
  }
}