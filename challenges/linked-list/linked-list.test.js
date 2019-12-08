const { 
    Node,
    LinkedList
} = require('./linked-list.js');

describe('Linked List tests', () => {
    it('creates a new node with given values', () => {
        const newNode = new Node(5, 'node1');
        expect(newNode.head.value).toEqual(5);
    });
});