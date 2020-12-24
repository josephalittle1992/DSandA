class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        if (this.first) {
            return this.first;
        } else {
            return null;
        }
        
    }
    enqueue(value){
        const newNode = new Node(value);
        if (!this.length) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;

        }
        this.length++;
    }
    dequeue(){
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
            this.length = 0;
        } else {
            this.first = this.first.next;
            this.length--;
        }
        
        
    }
    
  }
  
  console.clear();
  const myQueue = new Queue();
  myQueue.enqueue(10);
  myQueue.enqueue(22);
  myQueue.enqueue(68);
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.enqueue(666);
  myQueue.enqueue(89);

 // console.log(myQueue.peek());
  console.log(myQueue);