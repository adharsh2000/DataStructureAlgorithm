
// class item {
// 	constructor()
// 	{
// 		this.value;
// 		this.priority;
// 	}
// };

// // Store the element of a priority queue
// let pr = [];
// for (var i = 0; i < 100000; i++)
// 	pr.push(new item());

// // Pointer to the last index
// let size = -1;

// // Function to insert a new element
// // into priority queue
// function enqueue(value, priority)
// {
// 	// Increase the size
// 	size++;

// 	// Insert the element
// 	pr[size] = new item();
// 	pr[size].value = value;
// 	pr[size].priority = priority;
// }

// // Function to check the top element
// function peek()
// {
// 	let highestPriority = Number.MIN_SAFE_INTEGER;
// 	let ind = -1;

// 	// Check for the element with
// 	// highest priority
// 	for (var i = 0; i <= size; i++) {

// 		// If priority is same choose
// 		// the element with the
// 		// highest value
// 		if (highestPriority == pr[i].priority && ind > -1
// 			&& pr[ind].value < pr[i].value) {
// 			highestPriority = pr[i].priority;
// 			ind = i;
// 		}
// 		else if (highestPriority < pr[i].priority) {
// 			highestPriority = pr[i].priority;
// 			ind = i;
// 		}
// 	}

// 	// Return position of the element
// 	return ind;
// }

// // Function to remove the element with
// // the highest priority
// function dequeue()
// {
// 	// Find the position of the element
// 	// with highest priority
// 	let ind = peek();

// 	// Shift the element one index before
// 	// from the position of the element
// 	// with highest priority is found
// 	for (var i = ind; i < size; i++) {
// 		pr[i] = pr[i + 1];
// 	}

// 	// Decrease the size of the
// 	// priority queue by one
// 	size--;
// }

// // Function Call to insert elements
// // as per the priority
// enqueue(10, 2);
// enqueue(14, 4);
// enqueue(16, 4);
// enqueue(12, 3);

// // Stores the top element
// // at the moment
// let ind = peek();

// console.log(pr[ind].value);

// // Dequeue the top element
// dequeue();

// // Check the top element
// ind = peek();
// console.log(pr[ind].value);

// // Dequeue the top element
// dequeue();

// // Check the top element
// ind = peek();
// console.log(pr[ind].value);

// // this code is contributed by phasing17


class Node {
	constructor(val, priority) {
		this.value = val
		this.weight = priority
	}
}
class PriorityQueue {
	constructor() {
		this.values = []
	}
	enqueue(val, priority) {
		const newNode = new Node(val, priority)
		this.values.push(newNode)
		this.bubbleUp()
	}
	bubbleUp() {
		let idx = this.values.length - 1
		let element = this.values[idx]
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			if (this.values[parentIdx].weight < element.weight) break
			this.values[idx] = this.values[parentIdx]
			this.values[parentIdx] = element
			idx = parentIdx
		}
	}
	dequeue() {
		let min = this.values[0]
		let end = this.values.pop()
		if (this.values.length) {
			this.values[0] = end
			this.sinkDown()
		}
		return min
	}
	sinkDown() {
		let idx = 0
		let element = this.values[idx]
		while (idx < this.values.length) {
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftChild,
				rightChild,
				swap = null
			if (this.values[leftChildIdx]) {
				leftChild = this.values[leftChildIdx]
				if (leftChild.weight < element.weight) swap = leftChildIdx;
			}
			if (this.values[rightChild]) {
				rightChild = this.values[rightChild];
				if (
					(!swap && rightChild.weight < element.weight) ||
					(swap && rightChild.weight < leftChild.weight)
				)
					swap = rightChildIdx;
			}
			if (!swap) break
			this.values[idx] = this.values[swap]
			this.values[swap] = element
			idx = swap
		}
	}
}

const queue = new PriorityQueue();

queue.enqueue("hi", 10)
queue.enqueue("hello", 30)
queue.enqueue("wow", 1)
queue.enqueue("where", 5)
queue.enqueue("hmmm", 2)
queue.enqueue("ok", 11)

// console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
// queue.enqueue("okay", 6)
console.log(queue.dequeue())
console.log(queue.dequeue())
// console.log(queue.dequeue())