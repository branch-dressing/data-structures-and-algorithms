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

  preOrderRecursion(node, array) {
    array.push(node.value);
    if(node.left) this.preOrderRecursion(node.left, array);
    if(node.right) this.preOrderRecursion(node.right, array);
  }

  preOrder() {
    const array = [];
    let currentNode = this.root;
    this.preOrderRecursion(currentNode, array);    
    return array;
  }

  inOrderRecursion(node, array) {
    if(node.left) this.inOrderRecursion(node.left, array);
    array.push(node.value);
    if(node.right) this.inOrderRecursion(node.right, array);
  }

  inOrder() {
    const array = [];
    let currentNode = this.root;
    this.inOrderRecursion(currentNode, array);    
    return array;
  }

  postOrderRecursion(node, array) {
    if(node.left) this.postOrderRecursion(node.left, array);
    if(node.right) this.postOrderRecursion(node.right, array);
    array.push(node.value);
  }

  postOrder() {
    const array = [];
    let currentNode = this.root;
    this.postOrderRecursion(currentNode, array);    
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