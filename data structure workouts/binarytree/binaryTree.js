class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            // console.log(this);
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return "data exist";
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        let current = this.root;
        let found = false;
        if (!this.root) return false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return "true: " + current.value;
    }

    findClosest(value) {
        let current = this.root, found = false;
        if (!this.root) return false;
        let closest = this.root;
        while (current && !found) {
            if (value < current.value) {
                closest = current;
                current = current.left;
            } else if (value > current.value) {
                closest = current;
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return closest;
    }

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    // Left, Root, Right.
    DFSinOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            // data.push(node.value);
            console.log(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // Root, Left, Right.
    DFSpreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // Left, Right, Root
    DFSpostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    smallest() {
        let current = this.root;
        if (!this.root) return false;
        while (current) {
            if (current.left) {
                current = current.left;
            } else {
                return current;
            }
        }
    }

    secondSmallest() {
        let current = this.root;
        if (!this.root) return false;
        let secondSmallest = this.root;
        while (current) {
            if (current.left) {
                secondSmallest = current;
                current = current.left;
            } else {
                return secondSmallest;
            }
        }
    }

    largest() {
        let current = this.root;
        if (!this.root) return false;
        while (current) {
            if (current.right) {
                current = current.right;
            } else {
                return current;
            }
        }
    }

    delete(value) {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        let parent = null;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) {
            return null;
        }
        if (current.left && current.right) {
            let successor = current.right;
            let successorParent = current;
            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }
            current.value = successor.value;
            current = successor;
            parent = successorParent;
        }
        let child = null;
        if (current.left) {
            child = current.left;
        } else if (current.right) {
            child = current.right;
        }
        if (!parent) {
            this.root = child;
        } else if (current === parent.left) {
            parent.left = child;
        } else {
            parent.right = child;
        }
        return current;
    }

    deleteRoot() {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        this.root.value = current.value;
        this.delete(current.value);
    }

    isBST() {
        function checkNode(node, min = null, max = null) {
            if (!node) return true;
            if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
                return false;
            }
            if (!checkNode(node.left, min, node.value) || !checkNode(node.right, node.value, max)) {
                return false;
            }
            return true;
        }
        return checkNode(this.root);
    }

    findPrimes() {
        if (!this.root) return "Tree is empty";
        const primes = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            let flag = 0;
            for (let i = 2; i <= Math.sqrt(current.value); i++) {
                if (current.value % i === 0) {
                    flag = 1;
                    break;
                }
            }
            if (current.value > 1 && flag == 0) {
                primes.push(current.value);
            }
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return primes;
    }

    printOdd() {
        if (!this.root) return "Tree is empty";
        const odds = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            if (current.value % 2 === 1) odds.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return odds;
    }

    printEven() {
        if (!this.root) return "Tree is empty";
        const even = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            if (current.value % 2 === 0) even.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return even;
    }

    duplicate() {
        if (!this.root) return "Tree is empty";
        let duplicates = new Set();
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (duplicates.has(current.value)) {
                duplicates.add(current.value);
            }
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return duplicates;
    }

    isFullbinaryTree(node) {
        if (!this.root) return null;
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift()
            if ((current.left == null && current.right == null)) {
                continue;
            }
            if ((current.left != null) && (current.right != null)) {
                return (this.isFullbinaryTree(current.left) && (this.isFullbinaryTree(current.right)))
            }
            return false;
        }
        return true;
    }

    minimumRight() {
        let node =  this.root;
        if (!node || !node.right) return null;
        let current = node.right;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }

    depth(node = this.root) {
        if (!node) {
            return 0;
        }
        let leftHeight = this.depth(node.left);
        let rightHeight = this.depth(node.right);
        if (leftHeight > rightHeight){
        return (leftHeight + 1);
        }else{
        return (rightHeight + 1);
    }
    }

}

let tree = new binarySearchTree();


tree.insert(3);
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(8);

tree.insert(9);
tree.insert(2);


// console.log(tree.findClosest(8));



console.log(tree.depth());