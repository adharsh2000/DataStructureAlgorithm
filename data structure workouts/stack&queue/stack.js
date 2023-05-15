//!my self------------------------------------------------------------------------------>
// class Node {
//     constructor(val) {
//         this.val = val;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//     }
//     push(val) {
//         const newNode = new Node(val);
//         if (this.top === null) {
//             this.top = newNode;
//         } else {
//             newNode.next = this.top;
//             this.top = newNode;
//         }
//     }
//     pop() {
//         if (this.top === null) {
//             return "stack underflow";
//         }
//         const removedNode = this.top;
//         this.top = this.top.next;
//         removedNode.next = null;
//         return removedNode;
//     }
// }


// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// // stack.print()
// console.log(stack);



//!hp----------------------------------------------------------------------------------->
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        let temp = this.first;
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
    print() {
        if (!this.first) {
            console.log("Stack is empty");
            return;
        }
        let current = this.first;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// console.log(stack);
// stack.pop()
// console.log(stack);
stack.push("j")
stack.push("a")
stack.push("v")
stack.push("a")
stack.push("T")
stack.push("p")
stack.push("o")
stack.push("i")
stack.push("n")
stack.push("t")
stack.print()