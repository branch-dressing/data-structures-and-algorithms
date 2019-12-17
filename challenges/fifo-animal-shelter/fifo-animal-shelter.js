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
        let thisNode = this.frontOfLine;

        while(thisNode) {
            if(thisNode.type === preference) {
                if(thisNode.pre) thisNode.pre.next = thisNode.next;
                if(thisNode.next) thisNode.next.pre = thisNode.pre;
                if(this.frontOfLine === thisNode) this.frontOfLine = thisNode.next;
                if(this.endOfLine === thisNode) this.endOfLine = thisNode.pre;
                return `You adopted ${thisNode.name} the ${thisNode.type}!`;
            }
            thisNode = thisNode.next;
        } 
        return 'Sorry, we don\'t have that kind of animal right now.';
    }

    whosHere() {
        let thisNode = this.frontOfLine;
        let whoIsHere = [];

        while(thisNode){
            whoIsHere.push(`A ${thisNode.type} named ${thisNode.name}`);
            thisNode = thisNode.next;
        }
        return whoIsHere;
    }
}

module.exports = {
    AnimalShelter
};
