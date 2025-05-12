class Queue {
  #arr = [];
  #head = 0;
  #tail = 0;

  enqueue(item) {
    this.#arr[this.#tail++] = item;
    return this.#tail - this.#head;
  }

  dequeue() {
    return this.#head >= this.#tail ? null : this.#arr[this.#head++];
  }

  peek() {
    return this.#arr[this.#tail];
  }

  print() {
    const arr = [];
    for (let i = this.#head; i < this.#tail; i++) {
      arr.push(this.#arr[i]);
    }

    return arr;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.print());
