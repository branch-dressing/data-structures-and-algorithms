const { 
    Node,
    Stack,
    PseudoQueue 
} = require('./pseudo-queue');

describe('Pseudo-Queue', () => {
    it('can create a node', () => {
        const newNode = new Node(10);
        expect(newNode.value).toEqual(10);
        expect(newNode.next).toEqual(null);
    });

    it('can create some stacks! (with methods)', () => {
        const myStack = new Stack();
        myStack.push(10);
        myStack.push(9);
        myStack.push(8);
        expect(myStack.top.next.value).toEqual(9);
        expect(myStack.top.next.next.next).toEqual(null);
        myStack.pop();
        expect(myStack.peek()).toEqual(9);
    });

    it('Psuedo Queue', () => {
        const myPsuedo = new PseudoQueue();
        
    })
});
