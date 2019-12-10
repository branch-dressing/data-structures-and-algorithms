class Node {
    constructor(value) {
        this.value = value;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = null;
        this.insert(value);
    }

    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        if(newNode.next) newNode.next.previous = newNode;
        this.head = newNode;
        return this;
    }

    includes(value) {
        let thisNode = this.head;
        while(thisNode){
            if(thisNode.value === value) return true;
            thisNode = thisNode.next;
        }
        return false;
    }

    toExplicitArray() {
        let thisNode = this.head;
        let nodeArray = [];

        while(thisNode){
            //Would this be a place for a ternary? Not a big fan of them, but this seems like it could turn two lines into one.
            let prev = null;
            if(thisNode.previous) prev = thisNode.previous.value;
            
            let value = thisNode.value;

            let next = null;
            if(thisNode.next) next = thisNode.next.value;

            nodeArray.push(`${prev}<-${value}->${next}`);
            thisNode = thisNode.next;
        }
        
        return nodeArray;
    }

    append(value) {
        const appendedNode = new Node(value);
        let thisNode = this.head;
        
        while(thisNode.next) thisNode = thisNode.next;
        
        appendedNode.next = null;
        appendedNode.previous = thisNode;
        thisNode.next = appendedNode;
    }

    insertBefore(value, newValue) {
        const insertedNode = new Node(newValue);
        let thisNode = this.head;

        while(thisNode.value !== value) thisNode = thisNode.next;

        if(thisNode.previous) {
            insertedNode.previous = thisNode.previous;
            thisNode.previous.next = insertedNode;
        } else {
            this.head = insertedNode;
            insertedNode.previous = null;
        }

        thisNode.previous = insertedNode;
        insertedNode.next = thisNode;
    }

    insertAfter(value, newValue) {
        const insertedNode = new Node(newValue);
        let thisNode = this.head;

        while(thisNode.value !== value) thisNode = thisNode.next;
        
        
        if(thisNode.next) {
            insertedNode.next = thisNode.next;
            thisNode.next.previous = insertedNode;
        } else {
            insertedNode.next = null;
        }

        insertedNode.previous = thisNode;
        insertedNode.next = thisNode.next;

        thisNode.next = insertedNode;
    }

    delete(value) {
        let thisNode = this.head;

        while(thisNode.value !== value) thisNode = thisNode.next;

        if(thisNode.next && thisNode.previous) {
            thisNode.previous.next = thisNode.next;
            thisNode.next.previous = thisNode.previous;
        } else if(!thisNode.next && thisNode.previous) {
            thisNode.previous.next = null;
        } else if(thisNode.next && !thisNode.previous) {
            thisNode.next.previous = null;
            this.head = thisNode.next;
        }
    }

    kthFromEnd(k) {
        if(typeof k !== 'number' || k < 0) return 'Input must be positive int';
        let thisNode = this.head;

        while(thisNode.next) thisNode = thisNode.next;
        for(let i = 0; i !== k; i++) {
            if(!thisNode) break;
            thisNode = thisNode.previous;
        }

        if(thisNode) return thisNode.value;
        return 'Number exceeds length';
    }

    
}

module.exports = {
    Node,
    DoublyLinkedList
};
