//WHITEBOARDING


//Create a Node Class
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

    //needs method called includes
    //takes any value
    //returns boolean
    //depending on whether that value exists as a nodes value in the list
    includes(value) {
        let thisNode = this.head;
        while(thisNode){
            if(thisNode.value === value) return true;
            thisNode = thisNode.next;
        }
        return false;


        //looks at head,
        //does it have value?
        //if yes return true
        //if no look to the next node
        //this can be done in a while look while node.next !== null
    }

    //has a method called toString
    //which take in no args
    //returns a string representing all the values in the linked list.
    toString() {
        //create emprty string
        //start at head
        //add node.value to string,
        //go to next, add to string
        //do in while loop while node.next !== null
        //returns a string
    }
}



module.exports = {
    Node,
    LinkedList
};
