const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      // if (node.data === data) {
      // }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      }
      if (data > node.data) {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    let currNode = this.rootNode;
    while (currNode) {
      if (currNode.data === data) {
        return true;
      }
      if (currNode.data < data) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }
    return false;
  }

  find(data) {
    let currNode = this.rootNode;
    while (currNode) {
      if (currNode.data === data) {
        return currNode;
      }
      if (currNode.data < data) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let minNode = this.rootNode;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let maxNode = this.rootNode;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};