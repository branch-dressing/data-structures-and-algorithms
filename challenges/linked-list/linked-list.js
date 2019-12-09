//WHITEBOARDING


//Create a Node Class
class Node {
}

class LinkedList {
    constructor(value, next) {
        this.head = {
            value: value,
            next: next
        };
    }
    
    insert(value, next) {
        const Node = new Node(value, next);
    }

    //needs method called includes
        //takes any value
        //returns boolean
        //depending on whether that value exists as a nodes value in the list
    includes(value) {
        //while(!node.next)
        //if(currentnode.head.value = value) return true
        //let node = node.next


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



module.exports = {
    LinkedList
};
