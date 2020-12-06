//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let leapYear
  year % 400 == 0 ? leapYear = true : 
  year % 100 == 0 ? leapYear = false :
  year % 4 == 0 ? leapYear = true : leapYear = false
  return leapYear
};
