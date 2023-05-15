

//! Class containing left and right child of current

// class Node {

// constructor(val) {
// this.key = val;
// this.left = null;
// this.right = null;
// }

// }

// // A javascript program to introduce Binary Tree
// // Root of Binary Tree

// var root = null;

// /*create root*/

// root = new Node(1);

// /* following is the tree after above statement
// 1
// / \
// null null */

// root.left = new Node(2);

// root.right = new Node(3);

// /* 2 and 3 become left and right children of 1
// 1
// / \
// 2 3
// / \ / \
// null null null null */

// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(8);
// root.left.left.left = new Node(9);
// root.left.left.right = new Node(10);

// /* 4 becomes left child of 2
// 1
// / \
// 2 3
// / \ / \
// 4 null null null
// / \
// null null
// */
// console.log(root);


//! full binary tree
// Node class representing a node in a binary tree
// class Node {
//     constructor(val) {
//       this.value = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
   
//   // FullBinaryTree class representing a full binary tree
//   class FullBinaryTree {
//     constructor() {
//       this.root = null;
//     }
   
//     // Method to insert a new node with the given value into the tree
//     insert(value) {
//       const newNode = new Node(value);
//       if (!this.root) {
//         this.root = newNode;
//       } else {
//         let currentNode = this.root;
//         while (true) {
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             break;
//           } else if (!currentNode.right) {
//             currentNode.right = newNode;
//             break;
//           } else {
//             currentNode = currentNode.left;
//           }
//         }
//       }
//     }
//     // Method to insert a new node with the given value as a child of the node with the given value
//   insert(parentValue, childValue) {
//     const newNode = new TreeNode(childValue);
//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       const parentNode = this.findNode(parentValue, this.root);
//       if (parentNode) {
//         parentNode.children.push(newNode);
//       }
//     }
//   }

//   // Method to find the node with the given value in the subtree rooted at the given node
//   findNode(value, node) {
//     if (!node) {
//       return null;
//     }

//     if (node.value === value) {
//       return node;
//     }

//     for (let child of node.children) {
//       const foundNode = this.findNode(value, child);
//       if (foundNode) {
//         return foundNode;
//       }
//     }

//     return null;
//   }

//   // Method to find the smallest element in the tree
//   findSmallest() {
//     if (!this.root) {
//       return null;
//     }
    
//     let smallest = this.root.value;
//     this.findSmallestRecursive(this.root, smallest);
    
//     return smallest;
//   }
  
//   // Recursive helper method to find the smallest element in the subtree rooted at the given node
//   findSmallestRecursive(node, smallest) {
//     if (!node) {
//       return;
//     }
    
//     if (node.value < smallest) {
//       smallest = node.value;
//     }
    
//     for (let child of node.children) {
//       this.findSmallestRecursive(child, smallest);
//     }
//   }
//   }
   
//   // Main function
//   const tree = new FullBinaryTree();
//   tree.insert(1);
//   tree.insert(2);
//   tree.insert(3);
//   tree.insert(4);
//   console.log(tree);
//   console.log(tree.printPostorder(this.root));

//! degenerate tree
// class Node {
//         constructor(val) {
//           this.value = val;
//           this.next = null;
//         }
//       }
       
//       // FullBinaryTree class representing a full binary tree
//       class FullBinaryTree {
//         constructor() {
//           this.root = null;
//         }
       
//         // Method to insert a new node with the given value into the tree
//         insert(value) {
//           const newNode = new Node(value);
//           if (!this.root) {
//             this.root = newNode;
//           } else {
//             let currentNode = this.root;
//             while (true) {
//               if (!currentNode.next) {
//                 currentNode.next = newNode;
//                 break;
//               } else {
//                 currentNode = currentNode.next;
//               }
//             }
//           }
//         }
//       }
       
//       // Main function
//       const tree = new FullBinaryTree();
//       tree.insert(1);
//       tree.insert(2);
//       tree.insert(3);
//       tree.insert(4);
//       console.log(tree);


//! left skwed biary tree
// class Node {
//         constructor(val) {
//           this.value = val;
//           this.left = null;
//         }
//       }
       
//       // FullBinaryTree class representing a full binary tree
//       class FullBinaryTree {
//         constructor() {
//           this.root = null;
//         }
       
//         // Method to insert a new node with the given value into the tree
//         insert(value) {
//           const newNode = new Node(value);
//           if (!this.root) {
//             this.root = newNode;
//           } else {
//             let currentNode = this.root;
//             while (true) {
//               if (!currentNode.left) {
//                 currentNode.left = newNode;
//                 break;
//               } else {
//                 currentNode = currentNode.left;
//               }
//             }
//           }
//         }
//       }
       
//       // Main function
//       const tree = new FullBinaryTree();
//       tree.insert(1);
//       tree.insert(2);
//       tree.insert(3);
//       tree.insert(4);
//       console.log(tree);

//! right skwed tree
// class Node {
//         constructor(val) {
//           this.value = val;
//           this.right = null;
//         }
//       }
       
//       // FullBinaryTree class representing a full binary tree
//       class FullBinaryTree {
//         constructor() {
//           this.root = null;
//         }
       
//         // Method to insert a new node with the given value into the tree
//         insert(value) {
//           const newNode = new Node(value);
//           if (!this.root) {
//             this.root = newNode;
//           } else {
//             let currentNode = this.root;
//             while (true) {
//                  if (!currentNode.right) {
//                 currentNode.right = newNode;
//                 break;
//               } else {
//                 currentNode = currentNode.right;
//               }
//             }
//           }
//         }
//       }
       
//       // Main function
//       const tree = new FullBinaryTree();
//       tree.insert(1);
//       tree.insert(2);
//       tree.insert(3);
//       tree.insert(4);
//       console.log(tree);


////////////
class TreeNode {
    constructor(val) {
      this.value = val;
      this.children = [];
    }
  }
  
  // GeneralTree class representing a general tree
  class GeneralTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a new node with the given value as a child of the node with the given value
    insert(parentValue, childValue) {
      const newNode = new TreeNode(childValue);
      if (!this.root) {
        this.root = newNode;
      } else {
        const parentNode = this.findNode(parentValue, this.root);
        if (parentNode) {
          parentNode.children.push(newNode);
        }
      }
    }
  
    // Method to find the node with the given value in the subtree rooted at the given node
    findNode(value, node) {
      if (!node) {
        return null;
      }
  
      if (node.value === value) {
        return node;
      }
  
      for (let child of node.children) {
        const foundNode = this.findNode(value, child);
        if (foundNode) {
          return foundNode;
        }
      }
  
      return null;
    }
  
    // Method to find the smallest element in the tree
    findSmallest() {
      if (!this.root) {
        return null;
      }
      
      let smallest = this.root.value;
      this.findSmallestRecursive(this.root, smallest);
      
      return smallest;
    }
    
    // Recursive helper method to find the smallest element in the subtree rooted at the given node
    findSmallestRecursive(node, smallest) {
      if (!node) {
        return;
      }
      
      if (node.value < smallest) {
        smallest = node.value;
      }
      
      for (let child of node.children) {
        this.findSmallestRecursive(child, smallest);
      }
    }
  }

  const b = new GeneralTree()
  b.insert(5)
  b.insert(3)
  b.insert(8)
  b.insert(2)
  b.insert(9)
  console.log(b.findSmallestRecursive());

  let s=[]
  s.unshift