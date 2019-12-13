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
        let valuesStringed = '';
        while(thisNode){
            if(!thisNode.next) {
                valuesStringed += thisNode.value + '-> null';
            } else {
                valuesStringed += thisNode.value + '-> ';
            }
            thisNode = thisNode.next;
        }
        return valuesStringed;
    }
}

function reverseList(list) {
    let thisNode = list.head;
    let holdMyNodes = [];
    let i = 0;

    while(thisNode) {
        holdMyNodes[i] = thisNode.value;
        i++;
        thisNode = thisNode.next;
    }
    
    thisNode = list.head;

    while(thisNode) {
        i--;
        thisNode.value = holdMyNodes[i];
        thisNode = thisNode.next;
    }
}

module.exports = {
    Node,
    LinkedList,
    reverseList
};
