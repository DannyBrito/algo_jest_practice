class WeightedGraph {
    constructor(){
        this.values = {}
    }
    addVertex(vertex){
        if(!this.values[vertex]) this.values[vertex] = []
    }

    addEdge(v1,v2,weight){
        this.values[v1].push({node:v2,weight})
        this.values[v2].push({node:v1,weight})
    }
}