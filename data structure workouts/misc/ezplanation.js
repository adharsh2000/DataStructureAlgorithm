
// class Node {
// 	constructor(val) {
// 		this.key = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// 	var temp;

// 	/* Inorder traversal of a binary tree */
// 	function inorder(temp) {
// 		if (temp == null)
// 			return;

// 		inorder(temp.left);
// 		console.log(temp.key + " ");
// 		inorder(temp.right);
// 	}

// 	/* function to insert element in binary tree */
// 	function insert(temp , key) {

// 		if (temp == null) {
// 			root = new Node(key);
// 			return;
// 		}
// 		var q = [];
// 		q.push(temp);

// 		// Do level order traversal until we find
// 		// an empty place.
// 		while (q.length!=0) {
// 			temp = q.shift();


// 			if (temp.left == null) {
// 				temp.left = new Node(key);
// 				break;
// 			} else
// 				q.push(temp.left);

// 			if (temp.right == null) {
// 				temp.right = new Node(key);
// 				break;
// 			} else
// 				q.push(temp.right);
// 		}
// 	}

// 	// Driver code
// 		var root = new Node(10);
// 		root.left = new Node(11);
// 		root.left.left = new Node(7);
// 		root.right = new Node(9);
// 		root.right.left = new Node(15);
// 		root.right.right = new Node(8);

// 		console.log("Inorder traversal before insertion:");
// 		inorder(root);

// 		var key = 12;
// 		insert(root, key);

// 		console.log("<br\>Inorder traversal after insertion:");
// 		inorder(root);

// // This code is contributed by umadevi9616


/////////////////////////////
// We create a class for the graph
// class Graph{
//     // The graph has only one property which is the adjacency list
//     constructor() { 
//         this.adjacencyList = {}
//     }
//     // The addNode method takes a node value as parameter and adds it as a key to the adjacencyList if it wasn't previously present
//     addNode(node) {
//         if (!this.adjacencyList[node]) this.adjacencyList[node] = []
//     }
//     // The addConnection takes two nodes as parameters, and it adds each node to the other's array of connections.
//     addConnection(node1,node2) {
//         this.adjacencyList[node1].push(node2)
//         this.adjacencyList[node2].push(node1)
//     }
//     // The removeConnection takes two nodes as parameters, and it removes each node from the other's array of connections.
//     removeConnection(node1,node2) {
//         this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2)
//         this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1)
//     }
//     // The removeNode method takes a node value as parameter. It removes all connections to that node present in the graph and then deletes the node key from the adj list.
//     removeNode(node){
//         while(this.adjacencyList[node].length) {
//             const adjacentNode = this.adjacencyList[node].pop()
//             this.removeConnection(node, adjacentNode)
//         }
//         delete this.adjacencyList[node]
//     }
// }

// const Argentina = new Graph()
// Argentina.addNode("Buenos Aires")
// Argentina.addNode("Santa fe")
// Argentina.addNode("Córdoba")
// Argentina.addNode("Mendoza")
// Argentina.addConnection("Buenos Aires", "Córdoba")
// Argentina.addConnection("Buenos Aires", "Mendoza")
// Argentina.addConnection("Santa fe", "Córdoba")
// Argentina.addConnection("Mendoza", "Córdoba")

// log(Argentina);
// Graph {
//     adjacencyList: {
//         'Buenos Aires': [ 'Córdoba', 'Mendoza' ],
//         'Santa fe': [ 'Córdoba' ],
//         'Córdoba': [ 'Buenos Aires', 'Santa fe' ],
//         Mendoza: [ 'Buenos Aires' ]
//     }
// }


// let arr = [3,30,34,5,9]
// let arr2 = arr.toString()
// log(arr2.split('').sort().slice(4).reverse().toString())

// const animal = {
//     eats: true
// };

// const dog = {
//     bark: true
// };

// dog.__proto__ = animal;

// log(dog.eats)

// class dog{
//     dogname='red';
//     dogage=8;
// }

// class cat extends dog{
//     catname='kitty';
//     catage=7;
// }

// class animal extends cat{
//     animal='animal';
// }

// const a = new animal()

// console.log(a.animal);
// console.log(a.catage);
// console.log(a.catname);
// console.log(a.dogage);
// console.log(a.dogname);
// //////////////

// class Graph {
//     constructor() {
//         this.numVertices = 0
//         this.adjMatrix = []
//         this.vertexValues = []
//     }
//     addVertex(value) {
//         this.vertexValues.push(value)
//         this.numVertices++
//         for (let i = 0; i < this.adjMatrix.length; i++) {
//             this.adjMatrix[i].push(0)
//         }
//         this.adjMatrix.push(new Array(this.numVertices).fill(0))
//     }
//     addEdge(v1, v2) {
//         let i = this.vertexValues.indexOf(v1)
//         let j = this.vertexValues.indexOf(v2)
//         this.adjMatrix[i][j] = 1
//         this.adjMatrix[j][i] = 1
//     }
// }

// const graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A", "B")

// console.log(graph)

// for (let item of graph.adjMatrix) {
//     console.log(item)
// }

/////////////////////////////////

class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(v) {
        if (!this.adjList[v]) this.adjList[v] = []
    }
    addEdge(v1, v2) {
        if (!this.adjList[v1]) this.adjList[v1] = []
        if (!this.adjList[v2]) this.adjList[v2] = []
        if (!this.adjList[v1].includes(v2)) this.adjList[v1].push(v2)
        if (!this.adjList[v2].includes(v1)) this.adjList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        if (!this.adjList[v1] || !this.adjList[v2]) return false
        this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2)
        this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1)
        return true
    }
    removeVertex(v) {
        if (!this.adjList[v]) return false
        for (let item in this.adjList) {
            if (this.adjList[item] === this.adjList[v]) continue
            this.adjList[item] = this.adjList[item].filter((vertex) => vertex !== v)
        }
        delete this.adjList[v]
    }
    BFS(vertex) {
        const queue = [vertex]
        const visited = {}
        const result = []
        visited[vertex] = true
        while (queue.length) {
            const currentVertex = queue.shift()
            result.push(currentVertex)
            for (let item of this.adjList[currentVertex]) {
                if (!visited[item]) {
                    visited[item] = true
                    queue.push(item)
                }
            }
        }
        return result
    }
    BFSRec(vertex, visited = {}, result = [], queue = [vertex]) {
        if (!queue.length) return result
        const currentNode = queue.shift()
        visited[currentNode] = true
        result.push(currentNode)
        for (let item of this.adjList[currentNode]) {
            if (!visited[item]) {
                visited[item] = true
                queue.push(item)
            }
        }
        const nextNode = queue[0]
        return this.BFSRec(nextNode, visited, result, queue)
    }
    DFS(start) {
        let stack = [start]
        let visited = {}
        let result = []
        visited[start] = true
        while (stack.length) {
            const currentVertex = stack.pop()
            result.push(currentVertex)
            for (let item of this.adjList[currentVertex]) {
                if (!visited[item]) {
                    visited[item] = true
                    stack.push(item)
                }
            }
        }
        return result
    }
    DFSRec(start, visited = {}, result = []) {
        result.push(start)
        visited[start] = true
        for (let item of this.adjList[start]) {
            if (!visited[item]) {
                visited[item] = true
                this.DFSRec(item, visited, result)
            }
        }
        return result
    }
    allValidPaths(start, end) {
        let visited = {}
        let result = []
        let adjList = this.adjList
        function DFSearch(start, arr = []) {
            arr.push(start)
            visited[start] = true
            if (start === end) {
                result.push(arr)
            }
            for (let item of adjList[start]) {
                if (!visited[item]) {
                    visited[item] = true
                    DFSearch(item, [...arr])
                }
            }
            visited[start] = false
        }
        DFSearch(start)
        return result
    }
    hasEdge(v1, v2) {
        if (!this.adjList[v1] || !this.adjList[v2]) return false;
        return this.adjList[v1].includes(v2) && this.adjList[v2].includes(v1);
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("C", "D")
graph.addEdge("B", "D")
graph.addEdge("E", "D")
graph.addEdge("E", "A")
console.log(graph)
log(graph.hasEdge())

// graph.removeVertex("C")

// console.log(graph)

// console.log(graph.BFSRec("A"))
// console.log(graph.DFSRec("A"))

// console.log(graph.allValidPaths("A", "E"))


///////////////////

// class Node {
//     constructor(value, priority) {
//         this.value = value
//         this.priority = priority
//     }
// }

// class PriorityQueue {
//     constructor() {
//         this.values = []
//     }
//     enqueue(val, priority) {
//         const newNode = new Node(val, priority)
//         this.values.push(newNode)
//         this.bubbleUp()
//     }
//     bubbleUp() {
//         let index = this.values.length - 1
//         let element = this.values[index]
//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2)
//             if (this.values[index].priority > this.values[parentIndex].priority) break
//             this.values[index] = this.values[parentIndex]
//             this.values[parentIndex] = element
//             index = parentIndex
//         }
//     }
//     dequeue() {
//         let min = this.values[0]
//         let end = this.values.pop()
//         if (this.values.length) {
//             this.values[0] = end
//             this.sinkDown()
//         }
//         return min
//     }
//     sinkDown() {
//         let element = this.values[0]
//         let index = 0
//         while (true) {
//             let leftChildIndex = 2 * index + 1
//             let rightChildIndex = 2 * index + 2
//             let swap = null
//             let leftChild, rightChild
//             if (this.values[leftChildIndex]) {
//                 leftChild = this.values[leftChildIndex]
//                 if (leftChild.priority < element.priority) swap = leftChildIndex
//             }
//             if (this.values[rightChildIndex]) {
//                 rightChild = this.values[rightChildIndex]
//                 if (
//                     (swap === null && rightChild.priority < element.priority) ||
//                     (swap !== null && rightChild.priority < leftChild.priority)
//                 )
//                     swap = rightChildIndex
//             }
//             if (swap === null) break
//             this.values[index] = this.values[swap]
//             this.values[swap] = element
//             index = swap
//         }
//     }
// }

// class WeightedGraph {
//     constructor() {
//         this.adjacencyList = {}
//     }
//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
//         return this
//     }
//     addEdge(v1, v2, weight) {
//         if (!this.adjacencyList[v1]) this.addVertex(v1)
//         if (!this.adjacencyList[v2]) this.addVertex(v2)
//         this.adjacencyList[v1].push({ node: v2, weight })
//         this.adjacencyList[v2].push({ node: v1, weight })
//         return this
//     }
//     removeVertex(vertex) {
//         if (!this.adjacencyList[vertex]) return null
//         this.adjacencyList[vertex].forEach((item) => {
//             this.adjacencyList[item.node] = this.adjacencyList[item.node].filter(
//                 (v) => v.node !== vertex
//             )
//         })
//         delete this.adjacencyList[vertex]
//         return this
//     }
//     removeEdge(v1, v2) {
//         if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null
//         this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v.node !== v2)
//         this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v.node !== v1)
//         return this
//     }
//     shortestPath(start, end) {
//         const path = []
//         const node = new PriorityQueue()
//         const distance = {}
//         const previous = {}
//         for (let vertex in this.adjacencyList) {
//             if (vertex === start) {
//                 distance[vertex] = 0
//                 node.enqueue(vertex, 0)
//             } else {
//                 distance[vertex] = Infinity
//                 node.enqueue(vertex, Infinity)
//             }
//             previous[vertex] = null
//         }
//         while (node.values.length) {
//             let smallest = node.dequeue().value
//             if (smallest === end) {
//                 while (previous[smallest]) {
//                     path.push(smallest)
//                     smallest = previous[smallest]
//                 }
//                 break
//             }
//             if (smallest || distance[smallest] !== Infinity)
//                 for (let nextNode of this.adjacencyList[smallest]) {
//                     let candidate = distance[smallest] + nextNode.weight
//                     if (candidate < distance[nextNode.node]) {
//                         distance[nextNode.node] = candidate
//                         previous[nextNode.node] = smallest
//                         node.enqueue(nextNode.node, candidate)
//                     }
//                 }
//         }
//         return path.concat(start).reverse()
//     }
// }

// var graph = new WeightedGraph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")

// graph.addEdge("A", "B", 4)
// graph.addEdge("A", "C", 2)
// graph.addEdge("B", "E", 3)
// graph.addEdge("C", "D", 2)
// graph.addEdge("C", "F", 4)
// graph.addEdge("D", "E", 3)
// graph.addEdge("D", "F", 1)
// graph.addEdge("E", "F", 1)

// // graph.removeVertex("D")

// // console.log(graph)

// console.log(graph.shortestPath("A", "F"))