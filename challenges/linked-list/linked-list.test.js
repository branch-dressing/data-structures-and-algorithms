const { 
    Node,
    LinkedList,
    reverseList
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
        });
        it('can find if a value is in the list', () => {
            myLinkedList.insert(2);
            myLinkedList.insert(3);
            myLinkedList.insert(4);
            myLinkedList.insert(5);
            expect(myLinkedList.includes(0)).toEqual(true);
            expect(myLinkedList.includes(3)).toEqual(true);
            expect(myLinkedList.includes(5)).toEqual(true);
            expect(myLinkedList.includes(10)).toEqual(false);
        });
        it('can turn return all node values as strings', () => {
            expect(myLinkedList.toString()).toEqual('5-> 4-> 3-> 2-> 1-> 0-> null');
        });
    });

    describe('Reverse List', () => {
        const myReverseList = new LinkedList(0);
        myReverseList.insert(1);
        myReverseList.insert(2);
        it('can reverse a list', () => {
            reverseList(myReverseList);
            expect(myReverseList.toString()).toEqual('0-> 1-> 2-> null');
        });
        const myReverseList2 = new LinkedList(0);
        myReverseList2.insert(1);
        myReverseList2.insert(2);
        myReverseList2.insert(3);
        myReverseList2.insert(4);
        myReverseList2.insert(5);
        myReverseList2.insert(6);
        it('can reverse a longer list', () => {
            reverseList(myReverseList2);
            expect(myReverseList2.toString()).toEqual('0-> 1-> 2-> 3-> 4-> 5-> 6-> null');
        });
        const singleItem = new LinkedList(0);
        it('can reverse a list', () => {
            reverseList(singleItem);
            expect(singleItem.toString()).toEqual('0-> null');
        });
    });
});

