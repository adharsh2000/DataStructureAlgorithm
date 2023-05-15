// addVertex(value) {
//   this.vertexValues.push(value);
//   this.numVertices++;
//   for (let i = 0; i < this.adjMatrix.length; i++) {
//     this.adjMatrix[i].push(0);
//   }
//   this.adjMatrix.push(new Array(this.numVertices).fill(0));
// }


class GraphM {
  constructor() {
    this.numVertices = 0;
    this.adjMatrix = [];
    this.vertexValues = [];
    this.vertexIndices = {};
  }
  
  
  addEdge(v1, v2) {
    let i = this.vertexValues.indexOf(v1);
    let j = this.vertexValues.indexOf(v2);
    this.adjMatrix[i][j] = 1;
    this.adjMatrix[j][i] = 1;
  }

  addVertex(value) {
    this.vertexValues.push(value);
    this.numVertices++;
    this.vertexIndices[value] = this.numVertices - 1; // set index for new vertex
    for (let i = 0; i < this.adjMatrix.length; i++) {
      this.adjMatrix[i].push(0);
    }
    this.adjMatrix.push(new Array(this.numVertices).fill(0));
  }

  removeEdge(v1, v2){
    let i = this.vertexValues.indexOf(v1)
    let j = this.vertexValues.indexOf(v2)
    if(i === -1 || j === -1) return false;
    this.adjMatrix[i][j] = 0;
    this.adjMatrix[j][i] = 0;
    return true;
  }

  

  bfs(startValue) {
    let visited = new Array(this.numVertices).fill(false);
    let queue = [];
    let result = [];
    let startVertex = this.vertexValues.indexOf(startValue);
    visited[startVertex] = true;
    queue.push(startVertex);
    while (queue.length > 0) {
      let vertex = queue.shift();
      result.push(this.vertexValues[vertex]);
      let neighbors = this.getNeighbors(vertex);
      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  getNeighbors(vertex) {
    let neighbors = [];
    for (let i = 0; i < this.numVertices; i++) {
      if (this.adjMatrix[vertex][i] === 1) {
        neighbors.push(i);
      }
    }
    return neighbors;
  }

  print(){
    for (let item of this.adjMatrix) {
      console.log(item)
    }
  }

  dfs(startValue) {
    let visited = new Array(this.numVertices).fill(false);
    let result = [];
    let startVertex = this.vertexValues.indexOf(startValue);
    this._dfsHelper(startVertex, visited, result);
    return result;
  }

  _dfsHelper(vertex, visited, result) {
    visited[vertex] = true;
    result.push(this.vertexValues[vertex]);
    let neighbors = this.getNeighbors(vertex);
    neighbors.forEach((neighbor) => {
      if (!visited[neighbor]) {
        this._dfsHelper(neighbor, visited, result);
      }
    });
  }



}


let g = new GraphM();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(7,2)

// g.removeEdge(0, 2)

// console.log(g.bfs(0)); // Output: [0, 1, 2, 3, 4]
// console.log(g.dfs(0));
console.log(g.bfs());

