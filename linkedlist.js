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
    console.log('output', output)
    return output
  }
  addToList(val) {
    let output = [],
      node = this.head
    if (this.head == null) {
      let newNode = new Node()
      newNode.value = val
      this.head = newNode
      return;
    }
    let addAfterLoop = true;
    while (node.next) {
      //output.push(node.value)
      if (node.value < val && node.next.value >= val) {
        addAfterLoop = false;
        let newNode = new Node()
        newNode.value = val
        node.next.next = node.next
        node.next = newNode
        break;
      } else {
        node = node.next
      }
      console.log(node.next)
    }
    console.log('--------------')
    if (addAfterLoop) {
      let newNode = new Node()
      newNode.value = val
      node.next = newNode
    }
  }
  addToList2(val) {
    console.log('add ', this.head, val)
    //1- if this.head is null create a new node and set it as the this.head of the list
    if (this.head === null) {
      let newNode = new Node()
      newNode.value = val
      this.head = newNode
      //this.head.next=newNode
      return newNode
    }
    //2- if there is a this.head with no next , set the new node with the new value as next node
    if (this.head.value < val && !this.head.next) {
      let newNode = new Node()
      newNode.value = val
      this.head.next = newNode
      return newNode
    }
    //3- 
    if (this.head.value < val && this.head.next.value < val) {
      // node=this.addToList(val)
      return node
    } else if (this.head.value < val && this.head.next.val >= val) {
      let newNode = new Node()
      newNode.value = val
      newNode.next = this.head.next
      this.head.next = newNode
      return newNode
    }
  }
}
console.log('Practice makes Perfect!');
let ls = new LinkedList()

ls.addToList(1)
ls.addToList(2)
ls.addToList(4)
ls.addToList(7)

ls.addToList(5)
ls.addToList(6)

ls.toArray()