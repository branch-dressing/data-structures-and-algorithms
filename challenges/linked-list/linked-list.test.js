const { 
    Node,
    LinkedList
} = require('./linked-list.js');

describe('Linked-List tests', () => {
    describe('Node Class Tests', () => {
        const testNode0 = new Node(5);
        it('creates a new node with correct value', () => {
            expect(testNode0).toEqual({ value: 5 });
        });
    });

    describe('Linked List Class tests', () => {
        const myLinkedList = new LinkedList(0);
        it('can create new Nodes in a list', () => {
            expect(myLinkedList).toEqual({ head: { next : null, value: 0 }
            });
            expect(myLinkedList.insert(1).head.next.value).toEqual(0);
            expect(myLinkedList.insert(2).head.next).toEqual('');
        });
    });
});
