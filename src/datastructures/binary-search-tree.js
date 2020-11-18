import { Compare, defaultCompare } from './util';
import { Node } from './models/node';

export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; // 用来比较节点值
    this.root = null; // {1} Node类型的根节点
  }

  insertNode = (node, key) => {
    // 如果新节点的键小于当前节点的键 那么需要检查当前节点的左侧子节点
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果没有左侧子节点
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else { // 检查当前节点的右侧子节点
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  // 向树中插入一个新的键
  insert = (key) => {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  searchNode = (node, key) => {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (
      this.compareFn(key, node.key) === Compare.BIGGER_THAN
    ) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }

  }

  // 在树中查找一个键。如果节点存在，则返回true；如果不存在，则返回false
  search = (key) => {
    return this.searchNode(this.root, key);
  }

  inOrderTraverseNode = (node, callback) => {
    // 递归调用相同的函数来访问左侧子节点
    // 接着对根节点进行一些操作（callback）
    // 然后再访问右侧子节点
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // 通过中序遍历方式遍历所有节点
  inOrderTraverse = (callback) => {
    // 回调函数用来定义我们对遍历到的每个节点进行的操作 也叫作访问者模式
    this.inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode = (node, callback) => {
    // 先序遍历会先访问节点本身
    // 然后再访问它的左侧子节点
    // 最后是右侧子节点
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // 通过先序遍历方式遍历所有节点
  preOrderTraverse = (callback) => {
    this.preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode = (node, callback) => {
    // 后序遍历会先访问左侧子节点，然后是右侧子节点，最后是父节点本身
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  // 通过后序遍历方式遍历所有节点
  postOrderTraverse = (callback) => {
    this.postOrderTraverseNode(this.root, callback);
  }

  minNode = (node) => {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  // 返回树中最小的值/键
  min = () => {
    return this.minNode(this.root);
  }

  maxNode = (node) => {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  // 返回树中最大的值/键
  max = () => {
    return this.maxNode(this.root);
  }

  removeNode = (node, key) => {
    if (node == null) { // {2}
      return null;
    }
    // 我们需要在树中找到要移除的键
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果要找的键比当前节点的值小，就沿着树的左边找到下一个节点
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 要找的键比当前节点的值大，那么就沿着树的右边找到下一个节点
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 如果我们找到了要找的键（键和node.key相等），就需要处理三种不同的情况。

      // 移除一个叶节点
      if (node.left == null && node.right == null) { // {9}
        node = null; // {10}
        return node; // {11}
      }

      // 移除有一个左侧或右侧子节点的节点
      if (node.left == null) { // {12}
        node = node.right; // {13}
        return node; // {14}
      } else if (node.right == null) { // {15}
        node = node.left; // {16}
        return node; // {17}
      }

      // 移除有两个子节点的节点
      // 当找到了要移除的节点后，需要找到它右边子树中最小的节点
      // 然后，用它右侧子树中最小节点的键去更新这个节点的值。通过这一步，我们改变了这个节点的键，也就是说它被移除了
      // 但是，这样在树中就有两个拥有相同键的节点了，这是不行的。要继续把右侧子树中的最小节点移除，毕竟它已经被移至要移除的节点的位置了
      // 最后，向它的父节点返回更新后节点的引用
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
  
    }
  }

  // 从树中移除某个键
  remove = (key) => {
    this.root = this.removeNode(this.root, key);
  }
}

