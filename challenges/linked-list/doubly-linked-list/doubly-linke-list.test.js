const { 
    Node,
    DoublyLinkedList
} = require('./doubly-linked-list');

describe('Doubly Linked-List tests', () => {
    describe('Node Class Tests', () => {
        const testNode0 = new Node(0);
        it('Still creates a new node with correct value', () => {
            expect(testNode0).toEqual({ value: 0 });
        });
    });
    const myDoubleLink = new DoublyLinkedList(0);
    myDoubleLink.insert(1);
    myDoubleLink.insert(2);

    describe('Doubly Linked List', () => {
        it('have corrert previousNode value', () => {
            expect(myDoubleLink.head.next.value).toEqual(1);
            expect(myDoubleLink.head.next.next.previous.value).toEqual(1);
            expect(myDoubleLink.head.next.next.previous.previous.value).toEqual(2);
        });
    });

    describe('Extended Double Link tests', () => {
        it('appends a node to the end of the list', () => {
            myDoubleLink.append('x');
            expect(myDoubleLink.head.next.next.next.value).toEqual('x');
        });
        it('can insert a new node somewhere in the list', () => {
            expect(myDoubleLink.head.next.value).toEqual(1);
            myDoubleLink.insertBefore(1, 'x');
            expect(myDoubleLink.head.next.value).toEqual('x');
            console.log(myDoubleLink);
        });

    });
});
