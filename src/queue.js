const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }

  getUnderlyingList() {
    return this.firstNode;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (!this.firstNode) {
      this.firstNode = node;
      this.lastNode = node;
    }
    if (this.firstNode) {
      this.lastNode.next = node;
      this.lastNode = node;
    }
  }

  dequeue() {
    let dequeued = this.firstNode;
    this.firstNode = this.firstNode.next;
    return dequeued.value;
  }
}

module.exports = {
  Queue
};
