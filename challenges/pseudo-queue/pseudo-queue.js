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

//WHITEBOARING
//needs an enque
//takes a value
//adds a node to the end of the line
//must use a new stack.

//we need two stacks. perhaps we construct both?

//needs a deque
//removes a node from the start of the line.

class PseudoQueue {
    //Let's create two stacks.
    //stack one is called adding
    //stack two is called removing.
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    enqueue(value) {
        //let currentStack = 
        //if(currentStack)
    }


    //when we call enque
    //we need to make sure the contents is in the correct stack
    //if not transfer it over
    // end - 10 - 9 - 8 - 7 - top
    //we add 6 to the line use the push method.
    //end - 10 - 9 - 8 - 7 - 6 - top

    //when we call enque
    //we need to make sure its in the correct stack
    //if not transfer it over
    //end - 6 - 7 - 8 - 9 - 10 - top
    //we pop from the stack

    toString() {
        let thisNode = this.front;
        let string = '';
        while(thisNode) {
            string = string + thisNode.value + '->';
            thisNode = thisNode.next;
        }
        string = string + '->null';
        return string;
    }

}

module.exports = {
    Node,
    Stack,
    PseudoQueue
}
