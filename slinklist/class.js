class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

export class SingleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head)return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head) return undefined
        let shifted = this.head
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }
        else{
            this.head = this.head.next
        }
        this.length--
        return shifted
    }
    unshif(val){
        newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    set(index,value){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = value
            return true
        }
        return false
    }
    insert(index,value){
        if(index < 0 || index > this.length) return false
        if(index === 0 ) return !!this.unshif(value)
        if(index === this.length) return !!this.push(value)
        let newNode = new Node(value)
        let prev = this.get(index-1)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        let prev = this.get(index-1)
        let removedNode = prev.next
        prev.next = removedNode.next
        this.length--
        return removedNode
    }
    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        return this
    }
}