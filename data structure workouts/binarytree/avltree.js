class Node {
    constructor(value) {
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (!node) {
            return 0;
        }
        return node.height;
    }

    getBalance(node) {
        if (!node) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        // perform rotation
        x.right = y;
        y.left = T2;

        // update heights
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

        // return new root
        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        // perform rotation
        y.left = x;
        x.right = T2;

        // update heights
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        // return new root
        return y;
    }

    insertNode(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            // value already exists
            return node;
        }

        // update height of this node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // get balance factor of node to check if it's unbalanced
        let balance = this.getBalance(node);

        // if node is unbalanced, then there are 4 cases to consider:
        // left left case
        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        // right right case
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        // left right case
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // right left case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        // return the unchanged node
        return node;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    // utility function to print the tree in-order
    inOrder(node) {
        if (!node) {
            return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    printTree() {
        this.inOrder(this.root);
    }
}

// create an AVL tree
let avlTree = new AVLTree();
avlTree.insert(10); 
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(5);
console.log(avlTree);
