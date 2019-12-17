class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
  
class Stack {
    constructor() {
        this.top = null;
    }
  
    push(value) {
        const node = new Node(value, this.top);
        this.top = node;
    }
  
    pop() {
        if(!this.top) return null;
  
        const top = this.top;
        this.top = top.next;
        return top;
    }
  
    peek() {
        if(!this.top) return null;
        return this.top.value;
    }
  
    isEmpty() {
        return !this.top;
    }
}

class PseudoQueue {
    constructor() {
        this.front = null;
    }
    //WHITEBOARING
    //needs an enque
    //takes a value
    //adds a node to the end of the line
    //must use a new stack.

    //we need two stacks. perhaps we construct both?

    //needs a deque
    //removes a node from the start of the line.

}

module.exports = {
    Node,
    Stack,
    PseudoQueue
}
