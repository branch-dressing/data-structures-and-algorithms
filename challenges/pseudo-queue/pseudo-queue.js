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
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value) {
        let pushStack = this.pushStack;
        let popStack = this.popStack;

        if(!pushStack.top && popStack.top) {
            let thisNode = popStack.top;
            while(thisNode) {
                pushStack.push(thisNode.value);
                popStack.pop();
                thisNode = popStack.top;
            }
        }
        pushStack.push(value);
    }

    dequeue() {
        let popStack = this.popStack;
        let pushStack = this.pushStack;

        if(!popStack.top && pushStack.top) {
            let thisNode = pushStack.top;
            while(thisNode) {
                popStack.push(thisNode.value);
                pushStack.pop();
                thisNode = pushStack.top;
            }
        }

        popStack.pop();
    }

    toString() {
        let currentStack = this.pushStack;
        let transferStack = this.popStack;
        let thisNode = currentStack.top;

        while(thisNode) {
            transferStack.push(thisNode.value);
            currentStack.pop();
            thisNode = currentStack.top;
        }

        thisNode = transferStack.top;

        let string = '';
        while(thisNode) {
            string = string + thisNode.value + '->';
            thisNode = thisNode.next;
        }
        string = string + 'null';
        return string;
    }

}

module.exports = {
    Node,
    Stack,
    PseudoQueue
}
