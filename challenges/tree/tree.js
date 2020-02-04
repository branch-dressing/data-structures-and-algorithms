class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = null;
    this.add(value);
  }
  
  add(value) {
    const newNode = new Node(value);
    const rootNode = this.root;
    if(!rootNode) {
      this.root = newNode;
    } else {
      let currentNode = rootNode;
      while(currentNode) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            currentNode = newNode.left;
          }
          else currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            currentNode = newNode.right;
          }
          else currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    let currentNode = this.root;
    while(currentNode) {
      if(value === currentNode.value) return true;
      else if(value < currentNode.value) currentNode = currentNode.left;
      else if(value > currentNode.value) currentNode = currentNode.right;
    }
    return false;
  }

  orderHelper(order, node, array) {
    if(order === 'pre') array.push(node.value);
    if(node.left) this.orderHelper(order, node.left, array);
    if(order === 'in') array.push(node.value);
    if(node.right) this.orderHelper(order, node.right, array);
    if(order === 'post') array.push(node.value);
  }

  preOrder() {
    const array = [];
    let currentNode = this.root;
    this.orderHelper('pre', currentNode, array);    
    return array;
  }

  inOrder() {
    const array = [];
    let currentNode = this.root;
    this.orderHelper('in', currentNode, array);    
    return array;
  }

  postOrder() {
    const array = [];
    let currentNode = this.root;
    this.orderHelper('post', currentNode, array);    
    return array;
  }

  breadthFirst() {
    const results = [];
    let queue = [];
    queue.push(this.root);

    while(queue.length > 0) {
      results.push(queue[0].value);
      if(queue[0].left) queue.push(queue[0].left);
      if(queue[0].right) queue.push(queue[0].right);
      queue.shift();
    }
    return results;
  }

  findMaximunValue() {
    let currentNode = this.root;
    while(currentNode.right) currentNode = currentNode.right;
    return currentNode.value;
  }

}

module.exports = {
  Node,
  BinaryTree
};
