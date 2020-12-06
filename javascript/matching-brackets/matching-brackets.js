//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  const open = ['(','[','{']
  const closed = [')',']','}']
  const tally = [0, 0, 0]
  
  let previous = ''
  for(const current of str.split('')) {
    const currentCharOpen = open.includes(current);
    const currentCharClosed = closed.includes(current);
    const previousCharOpen = open.includes(previous)

    const currenCharIdx = open.indexOf(current) != -1 ? open.indexOf(current) : closed.indexOf(current)
    const previousCharIdx = open.indexOf(previous) != -1 ? open.indexOf(previous) : closed.indexOf(previous)
    // Only apply logic for open/close brackets
    if(currentCharOpen || currentCharClosed) {        
      // Checking for an open close to deal with incorrectly matched brackets - ([)]
      if (previousCharOpen && !currentCharOpen && currenCharIdx != previousCharIdx)
        return false
      
      if(currentCharOpen) tally[currenCharIdx] += 1
      if(currentCharClosed) tally[currenCharIdx] -= 1
      
      // Dealing with case of brackets opening before being closed - )(
      if(tally[currenCharIdx] < 0) return false
      
      previous = current
    }
  }
  return tally.reduce((acc, cur) => acc += cur) === 0 ? true : false
};
