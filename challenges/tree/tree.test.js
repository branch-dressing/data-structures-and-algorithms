const { 
  BinaryTree
} = require('./tree');

const myTree = new BinaryTree(10);
myTree.add(9);
myTree.add(5);
myTree.add(15);
myTree.add(2);
myTree.add(3);
myTree.add(12);

const breadthTree = new BinaryTree(10);
breadthTree.add(3);
breadthTree.add(2);
breadthTree.add(7);
breadthTree.add(5);
breadthTree.add(9);
breadthTree.add(12);
breadthTree.add(15);
breadthTree.add(13);


describe('Tree Test', () => {
  it('returns true or false if a value is present', () => {
    expect(myTree.contains(10)).toEqual(true);
    expect(myTree.contains(9)).toEqual(true);
    expect(myTree.contains(15)).toEqual(true);
    expect(myTree.contains(2)).toEqual(true);
    expect(myTree.contains(3)).toEqual(true);
    expect(myTree.contains(12)).toEqual(true);
    expect(myTree.contains(5)).toEqual(true);

    expect(myTree.contains(6)).toEqual(false);
    expect(myTree.contains(1)).toEqual(false);
    expect(myTree.contains(100)).toEqual(false);
  });

  it('can give the preorder', () => {
    expect(myTree.preOrder()).toEqual([10, 9, 5, 2, 3, 15, 12]);
  });

  it('can give the inOrder', () => {
    expect(myTree.inOrder()).toEqual([2, 3, 5, 9, 10, 12, 15]);
  });

  it('can give the postOrder', () => {
    expect(myTree.postOrder()).toEqual([3, 2, 5, 9, 12, 15, 10]);
  });

  it('can give breadth-first order', () => {
    expect(breadthTree.breadthFirst()).toEqual([10, 3, 12, 2, 7, 15, 5, 9, 13]);
  });

  it('can get the maximum value', () => {
    expect(myTree.findMaximunValue()).toEqual(15);
    expect(breadthTree.findMaximunValue()).toEqual(15);
  })

});
