class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.arr[this.tail++] = item;
  }

  dequeue() {
    return this.head >= this.tail ? null : this.arr[this.head++];
  }

  size() {
    return this.arr.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
