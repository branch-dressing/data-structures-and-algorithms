class Node {
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}

class AnimalShelter {
    constructor() {
        this.endOfLine = null;
        this.frontOfLine = null
    }

    inTake(type, name) {
        const newNode = new Node(type, name);
        if(!this.frontOfLine) {
            this.frontOfLine = newNode;
        } else {
            this.endOfLine.next = newNode;
        }
        this.endOfLine = newNode;
    }

    adopt(preference) {
        
        
        
        return preference;
    }

    whosHere() {
        let currentNode = this.frontOfLine;
        let whoIsHere = [];

        while(currentNode){
            whoIsHere.push(`A ${currentNode.type} named ${currentNode.name}`);
            currentNode = currentNode.next;
        }
        return whoIsHere;
    }
}

module.exports = {
    AnimalShelter
};
