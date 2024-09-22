class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
    this.tail = new Node("tail");
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.len = 0;
  }

  size() {
    return this.len;
  }

  insert(node, data) {
    const newNode = new Node(data);
    newNode.prev = node.prev;
    newNode.next = node;
    node.prev.next = newNode;
    node.prev = newNode;
    this.len++;
    return newNode;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.len--;
  }

  toString() {
    const result = [];
    let current = this.head.next;
    while (current !== this.tail) {
      result.push(current.data);
      current = current.next;
    }
    return result.join("");
  }
}
