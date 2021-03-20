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
    const left = num <= this._data
    if(left) {
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
      const orderedTree = []
      for
      // Loop over all in some order and call cbFunc with data
  }

  ordered = []
  orderTree(tree) {


  }

  // [Symbol.iterator]() {
  //     const current = 1
  //     const last = 5

  //     return {
  //         next() {
  //             if(current < last) {
  //                 return {done: false, value: current++}
  //             } else {
  //                 return {done: true}
  //             }
  //         }
  //     }
  // }
}

