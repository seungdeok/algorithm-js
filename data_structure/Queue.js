class Queue {
  #arr = [];
  #head = 0;
  #tail = 0;

  enqueue(item) {
    this.#arr[this.#tail++] = item;
    return this.#tail - this.#head;
  }

  dequeue() {
    if (this.#head >= this.#tail) return null;
    return this.#arr[this.#head++];
  }

  peek() {
    return this.#arr[this.#tail];
  }
}
