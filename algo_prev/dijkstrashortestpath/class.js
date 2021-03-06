import PriorityQueue from '../priorityqueue/class.js'



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

    Dijkstra(start,finish){
        const nodes = new PriorityQueue()
        // using a priorityQueue
        const distances = {}
        const previous = {}
        const path = []
        let smallest
        // initial state where previous contains all vertex and shortest path from prev vertex
        for(const vertex in this.values){
            if(vertex === start){
            distances[vertex] = 0
            nodes.enqueue(vertex, 0)
            }
            else{
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest] !== Infinity){
                for(const neighbor in this.values[smallest]){
                    let nextNode = this.values[smallest][neighbor]
                    let candidate = distances[smallest] + nextNode.weight
                    let newNeighbor = nextNode.node
                    if(candidate < distances[newNeighbor]){
                        distances[newNeighbor] = candidate
                        previous[newNeighbor] = smallest
                        nodes.enqueue(newNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }

    Djs(start,finish){
        const distances = {}
        const previous = {}
        const priorityqueue = new PriorityQueue()
        let smallest 
        // initialized state 
        for(const vertex in this.values){
            if(vertex === start){
                distances[vertex] = 0
                priorityqueue.enqueue(vertex, 0)
            }
            else{
                distances[vertex] = Infinity
                priorityqueue.enqueue(vertex,Infinity)
            }
            previous[vertex] = null
        }

        while(priorityqueue.values.length){
            smallest = priorityqueue.dequeue().val
            if(smallest === finish){

            }
            if(smallest || distances[smallest] !== Infinity){
                for(const neighbor in this.values[smallest]){
                    let currentNeighbor = this.values[smallest][neighbor]
                    let candidate = distances[smallest] + currentNeighbor.weight
                    if(candidate < distances[currentNeighbor.node]){
                        distances[currentNeighbor.node] = candidate
                        previous[currentNeighbor.node] = smallest
                        priorityqueue(currentNeighbor,candidate)
                    }
                }
            }
        }
    }
}