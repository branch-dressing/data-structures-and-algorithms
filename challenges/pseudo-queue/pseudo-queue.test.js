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

    describe('Psuedo Queue', () => {
        const myPsuedo = new PseudoQueue();
        it('can enqueue correctly', () => {
            myPsuedo.enqueue(1);
            myPsuedo.enqueue(2);
            myPsuedo.enqueue(3);
            myPsuedo.enqueue(4);
            expect(myPsuedo.toString()).toEqual('1->2->3->4->null');
        });

        it('can dequeue correctly', () => {
            myPsuedo.dequeue();
            expect(myPsuedo.toString()).toEqual('2->3->4->null');
        });

        it('still works even when the info is in the other stack', () => {
            myPsuedo.enqueue(5);
            expect(myPsuedo.pushStack.peek()).toEqual(5);
            expect(myPsuedo.popStack.peek()).toEqual(null);
            expect(myPsuedo.toString()).toEqual('2->3->4->5->null');
            myPsuedo.enqueue(6);
            myPsuedo.dequeue();
            expect(myPsuedo.toString()).toEqual('3->4->5->6->null');
        });


    });
});
