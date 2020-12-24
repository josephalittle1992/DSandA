class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value) {
    //Adds to top of stack
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    //Removes from top of stack
    if (!this.top) {
      return this;
    }
    this.top = this.top.next;
    this.length--; 
    if (this.length == 0) {
      this.bottom = null;
    }
    return this;
  }
  
  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  printStack() {
    const stack = [];
    let currentNode = this.top;
    while (currentNode != null) {
      stack.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return stack;
  }
}

console.clear();
const myStack = new Stack();
myStack.push(19);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

