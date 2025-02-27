const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

  head = null;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if(!this.head) {

      this.head = new ListNode(value);

    } else {

      let dNode = this.head;

      while(dNode.next) {

        dNode = dNode.next;
         
      } 

      dNode.next = new ListNode(value);

    }
  }

  dequeue() {
    if(this.head.next) {

      let dNode = this.head;
      this.head = dNode.next;
  
      return dNode.value;
    }
  }
}

module.exports = {
  Queue
};
