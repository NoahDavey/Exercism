//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => {
    if(b == 0) throw new Error('Division by zero')
    return Math.floor(a / b)
  },
  'dup': a => [a, a],
  'drop': a => undefined,
  'swap': (a, b) => [b, a],
  'over': (a, b) => [a, b, a]
}

const operationTypes = ['numeric', 'unary-word', 'binary-word']

export class Forth {

  constructor() {
    this._stack = []
  }

  evaluate(expression) {
    // Turn input expression into array and convert numbers to ints
    this.expression = expression.split(' ')
      .map(item => {
        if (+item) return +item
        else return item
      })
    
    // Check if there are any user defined operations in the stack
    if (this.expression.includes(':')){
      let startDefinition = this.expression.indexOf(':')
      let endDefinition = this.expression.indexOf(';')

      let wordName = this.expression[startDefinition + 1] // The new word-name 
      let functionDefinition = ''
      for (let i = startDefinition + 1; i < endDefinition; i++) {
        let element = this.expression[i]
        let operationType = getOperationType(element)
       
        if ( operationType === 'numeric' || operationType == 'binary-word') {
          functionDefinition = `functionDefinition ${ops}.${element}(a, b)`
        } else if ( operationType === 'unary-word') {
          functionDefinition = `functionDefinition ${ops}.${element}(a)`
        // } else if ( operationType === 'binary-word') {
        } else {
          // Likely just a number in this case
          functionDefinition = 
        }
      }
    }

    // Find all pre-defined operations in the stack
    let operations = this.expression
      .filter(val => operationTypes.includes(getOperationType(val)) ? true : false)

    // Perform all operations in stack from left to right
    for(let operation of operations) {
      let operationIdx = this.expression.indexOf(operation)
      let operationType = getOperationType(operation)
      let result

      // Dealing with different operation types
      if (operationType === 'numeric') {
        this.enforceMinimumStackSize(2)
        result = ops[operation](this.expression[operationIdx - 2], this.expression[operationIdx - 1])
        this.expression.splice(operationIdx - 2, 3, result)

      } else if (operationType === 'unary-word') {
        this.enforceMinimumStackSize(1)
        result = ops[operation](this.expression[operationIdx - 1])
        if (operation === 'drop') this.expression.splice(operationIdx - 1, 2)
        if (operation === 'dup') this.expression.splice(operationIdx - 1, 2, ...result)
      
      } else if (operationType === 'binary-word') {
        this.enforceMinimumStackSize(2)
        result = ops[operation](this.expression[operationIdx - 2], this.expression[operationIdx - 1])
        this.expression.splice(operationIdx - 2, 3, ...result)

      }
    }

    //Update stack after evaluation
    this._stack = this.expression
  }

  // Ensure the stack size is big enough for the operation requested
  enforceMinimumStackSize(minimumSize) {
    if(this.expression.length <= minimumSize) throw new Error('Stack empty')
  }

  // Return the stack object
  get stack() {
    return this._stack
  }

}

function getOperationType(op) {
  if (op === '+' || op === '-' || op === '*' || op === '/') return 'numeric'
  if (op === 'dup' || op === 'drop') return 'unary-word' //Need to make case insensitive
  if (op === 'swap' || op === 'over') return 'binary-word'
  return ''
}
