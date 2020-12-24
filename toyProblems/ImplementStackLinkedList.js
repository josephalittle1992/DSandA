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
    return this.top.value;
  }

  push(value) {
    //Adds to top of stack
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = this.top;
      newNode.next = null;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }
  pop() {
    //Removes from top of stack
    this.top = this.top.next;
    this.length--; 
    if (this.length == 0) this.bottom = null;
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

const myStack = new Stack();
myStack.push(5);
myStack.push(5);
myStack.pop();
console.log(myStack.isEmpty());
console.log(myStack);
console.log(myStack.printStack());
