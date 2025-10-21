const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  head = null;

  root() {
    return this.head;
  }

  add( data ) {
    this.head = this.addNode(this.root(), data);
  }

  addNode(head, data) {

    if (!head) return new Node(data);

    if (head.data === data) return head;

    data > head.data ?
      head.right = this.addNode(head.right, data)
    :
      head.left = this.addNode(head.left, data);

    return head;
  }

  has( data ) {
    return Boolean(this.find(data));
  }

  find(data) {
    return this.findNode(this.root(), data);
  }

  findNode(head, data) {
    if(!head) return null;

    if(head.data === data) return head;

    return data < head.data ?
      this.findNode(head.left, data)
    :
      this.findNode(head.right, data);
  }


  remove(data) {
    if (!this.root()) return null;
    this.head = this.removeNode(this.root(), data);
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data === node.data) {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let maxL = node.left;

      while (maxL.right) {
        maxL = maxL.right;
      }

      node.data = maxL.data;
      node.left = this.removeNode(node.left, maxL.data);

      return node;
    }

    this.head = this.removeNode(this.head, data);
  }

  min() {
    return this.minNode(this.root());
  }

  minNode(head) {
    if (!head.left) return head.data;
    return this.minNode(head.left);
  }

  max() {
    return this.maxNode(this.root());
  }

  maxNode(head) {
    if (!head.right) return head.data;
    return this.maxNode(head.right);
  }
}

module.exports = {
  BinarySearchTree
};