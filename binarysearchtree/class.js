import Queue from '../queue/class'

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


class Bstree{

    constructor(){
        this.root = null
    }

    insert(value){
        
        let newNode = new Node(value)

        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(value === current.val)return undefined
            if(value < current.val){
                if(!current.left){
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else{
                if(!current.right){
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    find(value){
        if(!this.root) return undefined
        let current = this.root
        while(current){
            if(current.val === value) return current
            if(current.val < value ){
                current = current.left
            }
            else{
                current = current.right
            }
        }
        return undefined
    }
    // Breadth-first Search
    BFS(){
        if(!this.root) return []
        let result = []
        let node = this.root
        let queue = new Queue
        queue.enqueue(node)
        while(queue.size){
            node = queue.dequeue()
            result.push(node.val)
            if(node.left) queue.enqueue(node.left)
            if(node.right) queue.enqueue(node.right)
        }
        return result
    }

    DFSpreOrder(){
        if(!this.root) return []
        let result = []
        function traverse(node){
            result.push(node.val)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    
    DFSpostOrder(){
        if(!this.root) return[]
        let result = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            result.push(node.val)
        }
        traverse(this.root)
        return result
    }

    DFSinOrder(){
        if(!this.root)return []
        let result = []
        function traverse(node){
            if(node.left) traverse(node.left)
            result.push(node.val)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

}