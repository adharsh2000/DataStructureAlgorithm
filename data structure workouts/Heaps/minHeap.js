
class minbinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMin(){
        const min = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown()
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild < element){
                    swap = leftChildIdx;
                }
            }
            
            if( rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(swap === null && rightChildIdx < element || swap !==null && rightChild < leftChild){
                    swap = rightChildIdx;
                }
            }
            
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const m = new minbinaryHeap()
m.insert(3)
m.insert(4)
m.insert(39)
m.insert(78)
m.insert(35)
m.insert(26)
m.insert(50)
m.insert(16)
console.log(m);
console.log(m.extractMin());
// console.log(m.sinkDown());