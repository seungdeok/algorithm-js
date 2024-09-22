class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.len = 0;
  }

  size() {
    return this.len;
  }

  append(data) {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.len += 1;
  }

  trace() {
    let curNode = this.head;

    const arr = [];
    for (let i = 0; i < this.len; i++) {
      curNode = curNode.next;
      arr.push(`${curNode.data}`);
    }

    return arr;
  }

  toString() {
    return this.trace().join(",");
  }

  insert(index, data) {
    let curNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      curNode = curNode.next;
    }

    let newNode = new Node(data);
    newNode.next = curNode.next;
    curNode.next = newNode;

    this.len += 1;
  }

  remove(index) {
    let curNode = this.head;

    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }

    const removedNode = curNode.next;
    curNode.next = removedNode.next;

    this.len -= 1;

    return removedNode.data;
  }
}

const l = new LinkedList();
l.append(1);
l.append(2);
l.insert(1, 1000);
l.remove(1);
console.log(l);
console.log(l.size());
console.log(l.trace());
console.log(l.toString());
