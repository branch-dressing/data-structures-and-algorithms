const helper = (node) => {
  if(node.value % 3 === 0 && node.value % 5 === 0) node.value = 'FizzBuzz';
  if(node.value % 3 === 0) node.value = 'Fizz';
  if(node.value % 5 === 0) node.value = 'Buzz';
  node.value = node.value.toString();

  if(node.left) helper(node.left);
  if(node.right) helper(node.right);
};

const fizzBuzzTree = (tree) => {
  let currentNode = tree.root;
  helper(currentNode);
};


module.exports = { fizzBuzzTree };
