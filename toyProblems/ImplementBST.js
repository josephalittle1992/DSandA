class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    lookup(value) {
        if (value === this.root.value) return this.root;
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }

    }

    remove(value) {
        //search for value
        let removeNode = this.root;
        let prevNode = null;
        while (removeNode) {
            if (removeNode.value === value) break;
            //prevNode stores parent of node to be removed
            prevNode = removeNode;
            if (value < removeNode.value) {
                removeNode = removeNode.left;
            } else if (value > removeNode.value) {
                removeNode = removeNode.right;
            }
        }
        //if value does not exist return false
        if (removeNode === null) {
            return false;
        }

        //if value is a leaf delete it
        if (removeNode.left === null && removeNode.right === null) {
            if (value < prevNode.value) {
                prevNode.left = null;
            } else {
                prevNode.right = null;
            }
            //else if value has 1 child, bypass value and connect value.existingChild to prevNode
        } else if ((removeNode.left && !removeNode.right) || (!removeNode.left && removeNode.right)) {
            if (removeNode.value < prevNode.value) {
                if (!removeNode.left) {
                    prevNode.left = removeNode.right;
                } else {
                    prevNode.left = removeNode.left;
                }
            } else {
                if (!removeNode.left) {
                    prevNode.right = removeNode.right;
                } else {
                    prevNode.right = removeNode.left;
                }
            }
        //replace value with successor, successor = (go to right tree of value, then grab bottom left most node, if no left nodes exist, successor = value.right)
        } else {
            //find successor of removeNode
            let root = removeNode.right;
            let successor = root;
            let wentLeft = false;
            while (successor) {
                if (successor.left) {
                    wentLeft = true;
                    successor = successor.left;
                } else if (!successor.left && wentLeft === false) {
                    successor = successor.right;
                } else if (!successor.left && wentLeft === true) {
                    break;
                }
            }
            if (wentLeft === false) {
                successor = root;
            }
            let holderValue = successor.value;
            this.remove(successor.value);
            removeNode.value = holderValue;
        }
        return this;
        
    }


}


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

console.clear();
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(24);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(30);
tree.insert(17);
tree.insert(25);
tree.insert(41);
tree.remove(9);
console.log(JSON.stringify(traverse(tree.root)));