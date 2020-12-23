class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.previous = null;
        newNode.next = this.head;
        this.head.previous = newNode;
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
        currentNode.next.previous = newNode;
        newNode.previous = currentNode;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index === 0) {
            this.length--;
            this.head.next.previous = null;
            this.head = this.head.next;
            return;
        }
        if (index >= 1 && index < this.length - 1) {
            let currentNode = this.head;
            let pre = index - 1;
            for (let i = 0; i < pre; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next.next.previous = currentNode;
            currentNode.next = currentNode.next.next;
            this.length--;
            return;
        }
        if (index >= this.length - 1) {
            let currentNode = this.head;
            let pre = this.length - 3; //-3 because -1 accounts for length to index difference & -2 puts you 2 spots ahead of which node to delete
            for (let i = 0; i < pre; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next.previous = currentNode;
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

    printListBackwards() {
        const array = [];
        let currentNode = this.tail;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.previous;
        }
        console.log(array);
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.printList();
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.insert(1, 2);
myLinkedList.printList();
myLinkedList.remove(1);
myLinkedList.remove(1);
myLinkedList.printList();
console.log(myLinkedList);