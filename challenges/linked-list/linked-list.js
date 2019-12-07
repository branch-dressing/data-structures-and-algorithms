//WHITEBOARDING


//Create a Node Class
class Node {
    //upon instantiation, an empty linked list should be created
    constructor(value, next) {
        //needs head property
        this.head = {
            //has properties for the value stored in the node
            value: value,
            //has point to the next Node
            next: next
        };
    }
}

class LinkedList {
    //needs method called insert
        //takes any value as an arg
        //adds a new node with that value to the head of the list

//how is this differnt from constructor???
    insert(value) {
        const Node = new Node({ value, next });
    }

    //needs method called includes
        //takes any value
        //returns boolean
        //depending on whether that value exists as a nodes value in the list
    includes(value) {
        //looks at head,
        //does it have value?
        //if yes return true
        //if no look to the next node
        //this can be done in a while look while node.next !== null
        returns //Boolean
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



module.exports = Node;
