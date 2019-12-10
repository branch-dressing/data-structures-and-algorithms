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
    myDoubleLink.insert(3);
    myDoubleLink.insert(4);

    describe('Doubly Linked List', () => {
        it('have corrert previousNode value', () => {
            expect(myDoubleLink.head.next.value).toEqual(3);
            expect(myDoubleLink.head.next.next.previous.value).toEqual(3);
            expect(myDoubleLink.head.next.next.next.next.previous.value).toEqual(1);
            expect(myDoubleLink.head.next.next.next.next.previous.previous.previous.previous.value).toEqual(4);
        });
    });

    describe('Extended Double Link tests', () => {
        it('appends a node to the end of the list', () => {
            myDoubleLink.append('append me');
            expect(myDoubleLink.head.next.next.next.next.next.next.value).toEqual('append me');
        });
    });
});
