class Node {
    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.insert(value);
    }

    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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

    toString() {
        let thisNode = this.head;
        let valuesStringed = [];
        while(thisNode){
            valuesStringed.push(thisNode.value);
            thisNode = thisNode.next;
        }
        return valuesStringed;
    }
}

module.exports = {
    Node,
    LinkedList
};
