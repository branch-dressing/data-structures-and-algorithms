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
            myDoubleLink.append('a');
            expect(myDoubleLink.toString()).toEqual([2, 1, 0, 'a']);
        });
        it('can insert a new node before a value', () => {
            myDoubleLink.insertBefore(1, 'b');
            expect(myDoubleLink.toString()).toEqual([2, 'b', 1, 0, 'a']);
        });
        it('can insert a new node after a value', () => {
            myDoubleLink.insertAfter(1, 'c');
            expect(myDoubleLink.toString()).toEqual([2, 'b', 1, 'c', 0, 'a']);
        });
        it('can delete a node given a value', () => {
            myDoubleLink.delete(1);
            //myDoubleLink.delete(2);
            //myDoubleLink.delete(0);
            expect(myDoubleLink.toString()).toEqual([2, 'b', 'c', 0, 'a']);
        });
    });
});

// [2,     1,        'x',            0]
// [2, thisNode, insertedNode, thisNode.next]
// [2, thisNode, thisNode.next, insertedNode.next]