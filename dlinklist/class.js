class Node {
    constructor(val){
        // difference to track a previous for each node compare to single-link-list
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){

        if(!this.head)return undefined

        let removedElemet = this.tail

        if(this.lenght === 1){
            this.tail = null
            this.head = null
        }

        else{
            this.tail = removedElemet.prev
            this.tail.next = null
            removedElemet.prev = null
        }

        this.length--
        return removedElemet

    }

    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(value){
        let newNode = new Node(value)
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        let startPoint, counter

        if(index < 0 || index >= this.length) return undefined
        let mid = Math.floor(this.length/2)
        if( index < mid){
            startPoint = this.head
            counter = 0
            while(counter !== index){
                startPoint = startPoint.next
                counter++
            }
        }else{
            startPoint = this.tail
            counter = this.length - 1
            while(counter !== index){
                startPoint = startPoint.prev
                counter--
            }
        }
       return startPoint 
    }

    set(index,value){
    
        let nodeAtIndex = this.get(index)
        if(!nodeAtIndex) return false
        nodeAtIndex.val = value
        return true
    }

    insert(index,value){
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(value)
        if(index === this.length) return !!this.push(value)
        
        let newNode = new Node(value)
        let prev = this.get(index-1)
        let next = prev.next
        next.prev = newNode
        newNode.next = next
        prev.next = newNode
        newNode.prev = prev
        
        this.length++

        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined

        if(index === 0) return this.shif()
        if(index === this.length -1) return this.pop()

        let removedNode = this.get(index)
        removedNode.prev.next =  removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.prev = null
        removedNode.next = null
        this.length--
        return removedNode
    }
}