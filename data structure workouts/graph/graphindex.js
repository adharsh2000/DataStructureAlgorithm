class GraphI {
    constructor() {
        this.adjList = {}
        this.vertexCount = 0
    }

    addVertex(v) {
        if (!this.adjList[v]) {
            this.adjList[v] = []
            this.vertexCount++
        }
    }

    addEdge(v1, v2) {
        if (!this.adjList[v1]) this.addVertex(v1)
        if (!this.adjList[v2]) this.addVertex(v2)
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    indexGraph() {
        let vertexIndex = 0
        let indexMap = {}
        for (let v in this.adjList) {
            indexMap[v] = vertexIndex
            vertexIndex++
        }
        let indexedGraph = new GraphI()
        for (let v in this.adjList) {
            indexedGraph.addVertex(indexMap[v])
            for (let neighbor of this.adjList[v]) {
                indexedGraph.addEdge(indexMap[v], indexMap[neighbor])
            }
        }
        return indexedGraph
    }


}

const graph = new GraphI()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

console.log(graph.indexGraph('A'));





