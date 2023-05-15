class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    print(){
        if(!this.first){
            console.log("Queue is empty.");
            return;
        }
        let current = this.first;
        let values = [];
        while(current){
            values.push(current.value);
            current = current.next;
        }
        console.log("Queue:", values.join(" <- "));
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// console.log(queue);

// console.log(queue);
queue.print()
queue.dequeue()
queue.print()