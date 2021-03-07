//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this._list = list || []
  }

  compare(listObj) {
  let list1 = this._list.toString()
  let list2 = listObj._list.toString()

  if(list1 === list2) return 'EQUAL' 
  if(list2.includes(list1)) return 'SUBLIST' 
  if(list1.includes(list2)) return 'SUPERLIST'
  return 'UNEQUAL'

  }
}
