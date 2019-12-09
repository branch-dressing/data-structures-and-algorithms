const { 
    LinkedList
} = require('./linked-list.js');

describe('Linked List tests', () => {
    const node1 = new LinkedList(1, null);
    const node0 = new LinkedList(5, node1);
    it('creates a new node with correct value', () => {
        expect(node0.head.value).toEqual(5);
    });
    it('has points to the correct next node', () => {
        expect(node0.head.next).toEqual(node1);
    });
    it('can read the value of the next node', () => {
        expect(node0.head.next.head.value).toEqual(1);
    });
});
