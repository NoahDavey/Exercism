//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class LinkedList {
  constructor(){
    this.lList = {}
  }

  push(value) {
    let newNode = { 
      "value": value,
      "next":undefined,
    };

    if (isEmpty(this.lList)){ //Empty lList
      this.lList = newNode;
    } else{
      let currentNode = this.lList;
      while(currentNode.next !== undefined) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
 

  }

  pop() {
    let currentNode = this.lList;
    let previousNode;

    while(currentNode.next !== undefined) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    
    let value = currentNode.value;
    previousNode === undefined ? this.lList = {} : previousNode.next = undefined;

    return value;
  }

  shift() {
    let value = this.lList.value;
    this.lList.next == undefined ? this.lList = {} : this.lList = this.lList.next;
    return value;    
  }

  unshift(value) {
    let firstEntry = false;
    if (isEmpty(this.lList)) {
      firstEntry = true;
    }

    let newNode = {
      "value": value,
      "next": firstEntry ? undefined : this.lList,
    }

    this.lList = newNode;
  }

  delete(value) {
    let currentNode = this.lList;
    let previousNode;

    while(currentNode !== undefined) {
      if(currentNode.value == value) {
        if(previousNode == undefined && currentNode.next == undefined) this.lList = {}
        else if(previousNode == undefined && currentNode.next !== undefined) this.lList = currentNode.next
        else previousNode.next = currentNode.next;
        break;        
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  count() {
    if (isEmpty(this.lList)) return 0;
    
    let counter = 0;
    let currentNode = this.lList;
    while(currentNode !== undefined) {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }

}


//Function to check if a list is empty
function isEmpty(list) {
  if (Object.keys(list).length === 0 && list.constructor === Object) {
    return true
  }
  return false;
}