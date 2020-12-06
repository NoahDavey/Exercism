//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (query) => {
  const lookup = /([-\d]+|plus|minus|multiplied|divided|cubed|[^ a-zA-Z?])/g;
  let arr = query.match(lookup) ?? [];
  
  //Checking for unknown operations
  if(arr.includes("cubed")) throw new Error('Unknown operation');
  if(/Who/.test(query)) throw new Error('Unknown operation');

  //Checking for syntax errors
  if(arr.length == 0) throw new Error('Syntax error');
  for(let i = 0; i < arr.length; i++) {
    //Check that the first or last element should be numeric
    if((i == 0 || i == arr.length - 1) && !isNumeric(arr[i])){
      throw new Error('Syntax error');
    }
    //Check that an operator has a number on either side
    else if(!isNumeric(arr[i]) && (!isNumeric(arr[i - 1]) || !isNumeric(arr[i + 1]))){
      throw new Error('Syntax error');
    }
    //Check that a number has an operator on either side
    else if(isNumeric(arr[i]) && (isNumeric(arr[i - 1]) || isNumeric(arr[i + 1]))){
      throw new Error('Syntax error');
    }
  }


  // Loop through array until it is condensed into one element
  while(arr.length != 1){
    let result;
    let operationIdx = 1; // Reasoning that array will be set out [number, operation, number, ...]
    let operation = arr[operationIdx]; 

    if(operation === operations.mul)
      result = doOperation(operations.mul, arr[operationIdx - 1], arr[operationIdx + 1])
    else if(operation === operations.div)
      result = doOperation(operations.div, arr[operationIdx - 1], arr[operationIdx + 1])
    else if(operation === operations.add)
      result = doOperation(operations.add, arr[operationIdx - 1], arr[operationIdx + 1])
    else if(operation === operations.sub)
      result = doOperation(operations.sub, arr[operationIdx - 1], arr[operationIdx + 1])

    arr.splice(operationIdx - 1, 3, result); //Remove 3 elements starting from element before operation and replace with result
  }

  return +arr[0];
};

function doOperation(operation, a, b){
  if(operation === operations.mul) return +a * +b;
  if(operation === operations.div) return +a / +b;
  if(operation === operations.add) return +a + +b;
  if(operation === operations.sub) return +a - +b;
}

function isNumeric(num) {
  return !isNaN(num);
}

const operations = {
  "add": "plus",
  "sub": "minus",
  "mul": "multiplied",
  "div": "divided",
}