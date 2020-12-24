
class Stack {
  constructor() {
    this.data = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.data.length === 0) {
      return null;
    } else {
      return this.data[this.data.length - 1];
    }
  }

  push(value) {
    this.data.push(value);
    this.setTopBottomLength();
    return this;
  }
  pop() {
    this.data.pop();
    if (this.length > 1) {
      this.setTopBottomLength();
    } else {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    
    return this;   
  }

  setTopBottomLength() {
    this.top = this.data[this.data.length - 1];
    this.bottom = this.data[0];
    this.length = this.data.length;
  }
  
  isEmpty() {
    if (this.data.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  printStack() {
    return this.data;
  }
}

const myStack = new Stack();
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('youtube'));
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack.peek());

//NOTE - YOU DO NOT NEED .TOP .BOTTOM .LENGTH, JUSE USE BUILT
//IN ARRAY FUNCTIONS.  RETURNS OF UNDEFINED OKAY BUT COULD BE BETTER WHEN CALLING
//.PEEK() AND ARRAY IS EMPTY
