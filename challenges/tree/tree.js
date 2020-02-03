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


}

// sethContains(node = this.root, value) {
//   if(!node) return false; 
//   if(value < node.value) return this.sethContains(node.left, value); 
//   if(value > node.value) return this.sethContains(node.right, value); 
//   else return (value === node.value);
// }

module.exports = {
  Node,
  BinaryTree
}