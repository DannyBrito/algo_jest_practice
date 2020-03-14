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

    depthFirstRecursive(start){
        const result = []
        const seen = {}
        const dfs = vertex => {
            if(!vertex) return null
            seen[vertex] = true
            result.push(vertex)
            this.adjacencyList[vertex].forEach(e => {
                if(!seen[e]) return dfs(e)
            })
        }
        dfs(start)
    }

    depthFirstIterrative(start){
        const stack = [start]
        const result = []
        const seen = {}
        let currentVertex
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(e =>{
                if(!seen[e]){
                    seen[e] = true
                    stack.push(e)
                }
            })
        }
        return result
    }
}