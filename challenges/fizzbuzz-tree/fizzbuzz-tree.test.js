const { BinaryTree } = require('../tree/tree');
const { fizzBuzzTree } = require('./fizzbuzz-tree');

const myTree = new BinaryTree(15);
myTree.add(9);
myTree.add(5);
myTree.add(18);
myTree.add(10);
myTree.add(30);
myTree.add(31);

describe('Fizzbuzz Tests', () => {
  it('can fizzbuzz the tree', () => {
    fizzBuzzTree(myTree);
    expect(myTree.inOrder()).toEqual(['Buzz', 'Fizz', 'Buzz', 'FizzBuzz', 'Fizz', 'FizzBuzz', '31']);
  });
});
