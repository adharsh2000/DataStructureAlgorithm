//myself linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0 ? "list is empty" : `list size is ${this.size}`;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.size--;
        return this;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
    find(index) {
        if (index < 0 || index >= this.size) return null;
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.find(index)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.size) return false;
        if (index == this.size) return this.push(val)
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val)
        let prev = this.find(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode = temp;
        this.size++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.size) return undefined
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop()
        let prevNode = this.find(index - 1)
        let current = this.find(index)
        prevNode.next = current.next;
        this.size--;
        return current;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.size; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    largestVal() {
        let current = this.head;
        let foundMax = 0;
        while (current) {
            console.log(current);
            if (foundMax < current.val) {
                foundMax = current.val;
            }
            current = current.next;
        }
        return foundMax;
    }
    sort() {
        if (this.head === null || this.head.next === null) {
            return;
        }
        let current = this.head;
        let index = null;
        while (current !== null) {
            index = current.next;
            while (index !== null) {
                if (current.val > index.val) {//change the greater or less symbol for acs or desc sort
                    let temp = current.val;
                    current.val = index.val;
                    index.val = temp;
                }
                index = index.next;
            }
            current = current.next;
        }
    }
    findUnique() {
        const map = new Map();
        let current = this.head;
        while (current !== null) {
            if (map.has(current.val)) {
                map.set(current.val, false);
            } else {
                map.set(current.val, true);
            }
            current = current.next;
        }
        const unique = [];
        map.forEach((value, key) => {
            if (value) {
                unique.push(key);
            }
        });
        return unique;
    }
}

const list = new linkedlist()
console.log(list.isEmpty());
list.push(1);
list.push(1);
list.push(15);
console.log(list.findUnique());
// list.pop();
// console.log(list.isEmpty());
// list.shift()
// console.log(list.isEmpty());
// list.unshift(9);
// console.log(list.isEmpty());
// list.set(1,5)
// console.log(list.find(0));
// list.insert(2,7)
// list.remove(1)

// console.log(list.isEmpty());
// console.log(list.find(0));
// list.reverse()
// console.log(list);
// console.log(list.largestVal());
// list.sort()
// console.log(list);