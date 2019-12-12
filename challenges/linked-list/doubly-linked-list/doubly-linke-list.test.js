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
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-2->1', '2<-1->0', '1<-0->a', '0<-a->null']);
        });

        it('can insert a new node before a value', () => {
            myDoubleLink.insertBefore(1, 'b');
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-2->b', '2<-b->1', 'b<-1->0', '1<-0->a', '0<-a->null']);
        });

        it('can insert a new node before the head', () => {
            myDoubleLink.insertBefore(2, 'x');
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-x->2', 'x<-2->b', '2<-b->1', 'b<-1->0', '1<-0->a', '0<-a->null']);
        });

        it('can insert a new node after a value', () => {
            myDoubleLink.insertAfter(1, 'c');
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-x->2', 'x<-2->b', '2<-b->1', 'b<-1->c', '1<-c->0', 'c<-0->a', '0<-a->null']);
        });
        
        it('can insert a new node after the end', () => {
            myDoubleLink.insertAfter('a', 'z');
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-x->2', 'x<-2->b', '2<-b->1', 'b<-1->c', '1<-c->0', 'c<-0->a', '0<-a->z', 'a<-z->null']);
        });

        it('can delete a node given a value', () => {
            myDoubleLink.delete(1);
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-x->2', 'x<-2->b', '2<-b->c', 'b<-c->0', 'c<-0->a', '0<-a->z', 'a<-z->null']);
        });

        it('can delete a node from the end', () => {
            myDoubleLink.delete('z');
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-x->2', 'x<-2->b', '2<-b->c', 'b<-c->0', 'c<-0->a', '0<-a->null']);
        });

        it('can delete a node from the beginning', () => {
            myDoubleLink.delete('x');
            expect(myDoubleLink.toExplicitArray()).toEqual(
                ['null<-2->b', '2<-b->c', 'b<-c->0', 'c<-0->a', '0<-a->null']);
        });
    });

    describe('Mergin Linked List', () => {
        const mergeListOne = new DoublyLinkedList(0);
        mergeListOne.insert(1);
        mergeListOne.insert(2);

        const mergeListTwo = new DoublyLinkedList(10);
        mergeListTwo.insert(9);
        mergeListTwo.insert(8);
        it('can merge two even LL', () => {
            mergeListOne.mergList(mergeListTwo)
            expect(mergeListOne.toExplicitArray()).toEqual(
                ['null<-2->b', '2<-b->c', 'b<-c->0', 'c<-0->a', '0<-a->null']
            );
        });
    });
});

