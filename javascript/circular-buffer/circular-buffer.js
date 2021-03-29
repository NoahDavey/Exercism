//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(bufferSize) {
    this.bufferSize = bufferSize
    this.buffer = new Array(bufferSize).fill(undefined)
    this.currentElement = 0
    this.oldestElement = 0
  }

  write(item, forceWrite = false) {
    const noUndefinedElements = this.buffer.filter(x => !x).length === 0 
    if(noUndefinedElements && !forceWrite) {
      throw new BufferFullError()
    }
    if(forceWrite) {
      this.buffer[this.oldestElement % this.bufferSize] = item
    } else {
      this.buffer[this.currentElement++ % this.bufferSize] = item
    }
  }

  read() {
    const item = this.buffer[this.oldestElement % this.bufferSize] 
    if(item) {
      this.buffer[this.oldestElement & this.bufferSize] = undefined
      this.oldestElement++
      return item
    }
    throw new BufferEmptyError()
  }

  overwrite() {
    throw new Error('Remove this statement and implement this function');
  }

  forceWrite(item) {
    this.write(item, true)
  }

  clear() {
    this.buffer = new Array(this.bufferSize).fill(undefined)
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message = 'Buffer Full') {
      super(message)
      this.message = message
  }
}

export class BufferEmptyError extends Error {
  constructor(message = 'Buffer Empty') {
      super(message)
      this.message = message
  }
}