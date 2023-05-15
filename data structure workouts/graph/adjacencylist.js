class GraphL {
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

    hasEdge(v1, v2) {
        if (!this.adjList[v1] || !this.adjList[v2]) return false;
        return this.adjList[v1].includes(v2) && this.adjList[v2].includes(v1);
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

    detectCycle() {
        let visited = {};
        let parent = {};
        let cycle = [];
        for (let vertex in this.adjList) {
            if (!visited[vertex]) {
                if (this.detectCycleDFS(vertex, visited, parent, cycle)) {
                    cycle.push(cycle[0]);
                    return cycle;
                }
            }
        }
        return null;
    }

    detectCycleDFS(vertex, visited, parent, cycle) {
        visited[vertex] = true;
        for (let item of this.adjList[vertex]) {
            if (!visited[item]) {
                parent[item] = vertex;
                if (this.detectCycleDFS(item, visited, parent, cycle)) {
                    cycle.push(vertex);
                    if (cycle[0] === vertex) {
                        return true;
                    }
                    cycle.pop();
                }
            } else if (parent[vertex] !== item) {
                cycle.push(vertex);
                cycle.push(item);
                return true;
            }
        }
        return false;
    }

    print() {
        for (const vertex in gra.adjList) {
            console.log(`${vertex} : ${gra.adjList[vertex].join(" -> ")}`)
        }
    }

}

const gra = new GraphL()

gra.addVertex("A")
gra.addVertex("B")
gra.addVertex("C")
gra.addVertex("D")
gra.addVertex("E")

gra.addEdge("A", "B")
gra.addEdge("C", "D")
gra.addEdge("B", "D")
gra.addEdge("E", "D")
gra.addEdge("E", "A")

// gra.print()
console.log(gra.detectCycle());

// console.log(gra.hasEdge("A", "B"));
// console.log(gra.hasEdge("A", "C"));
