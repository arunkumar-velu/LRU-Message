class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addNode(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      node.prev = last;
      last.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeNode(value) {
    if (this.head.val == value) {
      this.head = this.head.next;
      this.size--;
    }
    let n = this.head;
    while (n.next && n.val !== value) {
      n = n.next;
    }
    n.prev && (n.prev.next = n.next);
    n.next && (n.next.prev = n.prev);
    this.size--;
  }
}
class LRU {
  constructor() {
    this.name = "LRU";
  }
}
const lru = new LRU();
console.log(lru.name);

const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.removeNode(2);
console.log(ll);

ll.addNode(4);
console.log(ll);
