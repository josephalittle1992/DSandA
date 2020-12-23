class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            return;
        }
        const newNode = new Node(value);
        let pre = index - 1;
        let currentNode = this.head
        for (let i = 0; i < pre; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index === 0) {
            this.length--;
            return this.head = this.head.next;
        }
        if (index >= 1 && index < this.length - 1) {
            let currentNode = this.head;
            let pre = index - 1;
            for (let i = 0; i < pre; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next;
            this.length--;
            return;
        }
        if (index >= this.length -1) {
            let currentNode = this.head;
            let twoPre = this.length - 3; //-3 because -1 accounts for length to index difference & -2 puts you 2 spots ahead of which node to delete
            for (let i = 0; i < twoPre; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next.next = null;
            this.tail = currentNode.next;
            this.length--;
            return;

        }

    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    //reverse linkedList method
    reverse() {
        if (!this.head.next) { //! checks if null
            return this.head;
        } 
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second != null) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return;

    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(89);
myLinkedList.printList();
myLinkedList.reverse();
console.log(myLinkedList);