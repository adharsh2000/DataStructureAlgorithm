class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTreeF {
    constructor() {
        this.root = null
    }

    addNode(value) {
        if (!this.root) {
            this.root = new Node(value)
            return
        }
        let queue = [this.root]
        while (queue.length > 0) {
            let current = queue.shift()
            if (!current.left) {
                current.left = new Node(value)
                return
            } else if (!current.right) {
                current.right = new Node(value)
                return
            } else {
                queue.push(current.left)
                queue.push(current.right)
            }
        }
    }

    findSmallest() {
        if (!this.root) {
            return null;
        }
        let smallest = this.root.value;
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift()
            if (current.value < smallest) {
                smallest = current.value;
            }
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return smallest;
    }

    findSecondSmallest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
            return null;
        }
        let smallest = this.root.value;
        let secondSmallest = null;
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.value < smallest) {
                secondSmallest = smallest;
                smallest = current.value;
            } else if (current.value > smallest && (!secondSmallest || current.value < secondSmallest)) {
                secondSmallest = current.value;
            }
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return secondSmallest;
    }

    isPrime() {
        if (!this.root) {
            return null; // return null if there is no root node
        }
        let primes = []; // create an empty array to hold prime numbers
        let queue = [this.root]; // create a queue with the root node
        while (queue.length > 0) { // loop until the queue is empty
            let current = queue.shift(); // remove the first node from the queue
            let flag = 0;
            // loop from 2 to the square root of the current node's value
            for (let j = 2; j <= Math.sqrt(current.value); j++) {
                if (current.value % j == 0) {
                    flag = 1; // set the flag to 1 if the current node's value is divisible by j
                    break; // exit the loop early since the node is not prime
                }
            }
            if (current.value > 1 && flag == 0) {
                primes.push(current.value); // add the current node's value to the primes array if it is prime
            }
            // add the current node's left and right children to the queue if they exist
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return primes; // return the primes array
    }

    findLargest() {
        if (!this.root) {
            return null
        }
        let largest = this.root.value
        let queue = [this.root]
        while (queue.length > 0) {
            let current = queue.shift()
            if (current.value > largest) {
                largest = current.value
            }
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return largest
    }

    findEven(){
        if(!this.root){
            return null;
        }
        let even = [];
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift()
            if(current.value % 2 == 0){
                even.push(current.value);
            }
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return even;
    }

    findUnique() {
        if (!this.root) {
            return null;
        }
        let unique = new Set();
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift()
            if (!unique.has(current.value)) {
                unique.add(current.value)
            }
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return Array.from(unique);
    }

    sum(){
        if(!this.root){
            return null;
        }
        let sum = 0;
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift()
            sum += current.value;
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return sum;
    }

    print(){
        if(!this.root){
            return false;
        }
        let queue = [this.root]
        while(queue.length > 0){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }


}

// create a binary tree
let tr = new BinaryTreeF()
tr.addNode(4)
tr.addNode(2)
// tr.addNode(1)
tr.addNode(3)
tr.addNode(6)
tr.addNode(5)
tr.addNode(7)


// find the smallest element
// console.log(tree.findSecondSmallest()) // output: 1
// console.log(tr.isPrime());
// console.log(tr.findLargest());
// console.log(tr.findEven());
// console.log(tr.findUnique());
// console.log(tr.sum());
tr.print()

