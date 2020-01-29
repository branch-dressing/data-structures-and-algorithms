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
        if(newNode.next) newNode.next.pre = newNode;
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
            if(thisNode.pre) prev = thisNode.pre.value;
            
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
        appendedNode.pre = thisNode;
        thisNode.next = appendedNode;
    }

    insertBefore(value, newValue) {
        const insertedNode = new Node(newValue);
        let thisNode = this.head;

        while(thisNode.value !== value) thisNode = thisNode.next;

        if(thisNode.pre) {
            insertedNode.pre = thisNode.pre;
            thisNode.pre.next = insertedNode;
        } else {
            this.head = insertedNode;
            insertedNode.pre = null;
        }

        thisNode.pre = insertedNode;
        insertedNode.next = thisNode;
    }

    insertAfter(value, newValue) {
        const insertedNode = new Node(newValue);
        let thisNode = this.head;

        while(thisNode.value !== value) thisNode = thisNode.next;
        
        
        if(thisNode.next) {
            insertedNode.next = thisNode.next;
            thisNode.next.pre = insertedNode;
        } else {
            insertedNode.next = null;
        }

        insertedNode.pre = thisNode;
        insertedNode.next = thisNode.next;

        thisNode.next = insertedNode;
    }

    delete(value) {
        let thisNode = this.head;

        while(thisNode.value !== value) thisNode = thisNode.next;

        if(thisNode.next && thisNode.pre) {
            thisNode.pre.next = thisNode.next;
            thisNode.next.pre = thisNode.pre;
        } else if(!thisNode.next && thisNode.pre) {
            thisNode.pre.next = null;
        } else if(thisNode.next && !thisNode.pre) {
            thisNode.next.pre = null;
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

    findMiddle() {
        let thisNode = this.head;
        let length = 0;
        while(thisNode) {
            length++;
            thisNode = thisNode.next;
        }
        thisNode = this.head;
        let midIndex = Math.floor(length / 2);
        for(let i = 0; i < midIndex; i++) thisNode = thisNode.next;
        return thisNode.value;
    }
}

function mergeList(listOne, listTwo) {
    let thisNodeOne = listOne.head;
    let thisNodeTwo = listTwo.head;
    thisNodeTwo.head = null;

    while(thisNodeOne && thisNodeTwo) {
        let holdMyNodeOne = thisNodeOne.next;
        let holdMyNodeTwo = thisNodeTwo.next;

        if(thisNodeOne.next) thisNodeTwo.next = thisNodeOne.next;
        if(thisNodeOne.pre) thisNodeOne.pre = thisNodeTwo.pre;
        thisNodeTwo.pre = thisNodeOne;
        thisNodeOne.next = thisNodeTwo;

        thisNodeOne = holdMyNodeOne;
        thisNodeTwo = holdMyNodeTwo;
    }

    if(thisNodeOne) thisNodeOne.pre = thisNodeOne.pre.next;
}

module.exports = {
    Node,
    DoublyLinkedList,
    mergeList
};
