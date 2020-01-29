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

    transferStack(emptyStack, fullStack) {
        let thisNode = fullStack.top;
        while(thisNode) {
            emptyStack.push(thisNode.value);
            fullStack.pop();
            thisNode = fullStack.top;
        }
    }

    enqueue(value) {
        let pushStack = this.pushStack;
        let popStack = this.popStack;

        if(!pushStack.top && popStack.top) this.transferStack(pushStack, popStack);

        pushStack.push(value);
    }

    dequeue() {
        let popStack = this.popStack;
        let pushStack = this.pushStack;

        if(!popStack.top && pushStack.top) this.transferStack(popStack, pushStack);

        popStack.pop();
    }

    toString() {
        let pushStack = this.pushStack;
        let popStack = this.popStack;
        let string = '';
        
        if(!popStack.top && pushStack.top) this.transferStack(popStack, pushStack);
        
        let thisNode = popStack.top;
        while(thisNode) {
            string = string + thisNode.value + '->';
            thisNode = thisNode.next;
        }
        return string + 'null';
    }

    whatStack() {
        if(this.popStack.top) return 'pop-stack';
        if(this.pushStack.top) return 'push-stack';
    }

}

module.exports = {
    Node,
    Stack,
    PseudoQueue
};
