class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeTail() {
    if (this.tail.prev === this.head) {
      return null;
    }
    const tailNode = this.tail.prev;
    this.removeNode(tailNode);
    return tailNode;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.dll = new DoublyLinkedList();
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.dll.removeNode(node);
      this.dll.addToHead(node); // HEAD(최근)
      return node.value;
    } else {
      return null;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.dll.removeNode(node);
      this.dll.addToHead(node);
    } else {
      if (this.cache.size >= this.capacity) {
        const removedNode = this.dll.removeTail(); // TAIL(가장 오래된)
        if (removedNode) {
          this.cache.delete(removedNode.key);
        }
      }
      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.dll.addToHead(newNode);
    }
  }
}
