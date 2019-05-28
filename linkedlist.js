//Created sorted linked list

class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // root of a binary seach tree 
        this.head = null;
        this.linkedList = []
    }

    getHead() {
        return this.head
    }

    toArray() {
        let output = [],
            node = this.head
        while (node.next) {
            output.push(node.value)
            node = node.next
        }
        output.push(node.value)
        console.log('output', output)
        return output
    }

    addToList(val) {
        let output = [],
            node = this.head
        if (this.head == null) {
            let newNode = new Node()
            newNode.value = val
            newNode.next = null
            this.head = newNode
            // console.log('head node',this.head)
            return;
        }
        if (this.head.next == null) {
            let newNode = new Node()
            let headNode=this.head
            newNode.value = val
            if(this.head.value>val){
                this.head = newNode
                this.head.next = headNode
            }else{
                this.head.next = newNode
            }
            // console.log('head node',this.head)
            return;
        }

        while (node.next) {
            console.log(node.value,node.next.value)

            if (node.value < val && node.next.value >= val) {
                let newNode = new Node()
                newNode.value = val
                newNode.next = node.next
                node.next = newNode
                // break;
                return;
            } else {
                node = node.next
            }
        }

        let newNode = new Node()
        newNode.value = val
        newNode.next = null
        node.next = newNode
    }
}

let ls = new LinkedList()

ls.addToList(1)
ls.toArray()
ls.addToList(2)
ls.toArray()
ls.addToList(4)
ls.toArray()
ls.addToList(7)
ls.toArray()
ls.addToList(5)
ls.toArray()

ls.addToList(6)

ls.toArray()