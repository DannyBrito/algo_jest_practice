class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e !== v1)
    }

    removeVertex(vertex){
        this.adjacencyList[vertex].forEach(e => this.removeEdge(e,vertex))
        delete this.adjacencyList[vertex]
    }
}