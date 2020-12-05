//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {}
  }
  
  roster() {
    // Make deep copy of roster
    return JSON.parse(JSON.stringify(this._roster))
  }

  add(name, grade) {
    if(!this._roster[grade]) {
      this._roster[grade] = []
    } 
    this._roster[grade] = [...this._roster[grade], name].sort()
  }

  grade(grade) {
    if(this._roster[grade]) 
      return [...this._roster[grade]] // Return deep copy of grade array
    else return []
  }
}