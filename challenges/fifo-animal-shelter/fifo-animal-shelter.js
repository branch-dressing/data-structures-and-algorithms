class Node {
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}

class AnimalShelter {
    constructor() {
        this.endOfLine = null;
        this.frontOfLine = null;
    }

    inTake(type, name) {
        const newNode = new Node(type, name);
        if(!this.frontOfLine) {
            this.frontOfLine = newNode;
        } else {
            this.endOfLine.next = newNode;
            newNode.pre = this.endOfLine;
        }
        this.endOfLine = newNode;
    }

    adopt(preference) {
        let currentNode = this.frontOfLine;

        while(currentNode) {
            if(currentNode.type === preference) {
                if(currentNode.pre) currentNode.pre.next = currentNode.next;
                if(currentNode.next) currentNode.next.pre = currentNode.pre;
                if(this.frontOfLine === currentNode) this.frontOfLine = currentNode.next;
                if(this.endOfLine === currentNode) this.endOfLine = currentNode.pre;
                return `You adopted ${currentNode.name} the ${currentNode.type}!`;
            }
            currentNode = currentNode.next;
        } 
        return 'Sorry, we don\'t have that kind of animal right now.';
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
