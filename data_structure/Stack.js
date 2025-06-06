class Stack {
  #arr = [];
  #index = 0;

  push(item) {
    this.#arr[this.#index++] = item;
    return this.#arr.length;
  }

  pop() {
    return this.#arr[--this.#index];
  }

  peek() {
    return this.#arr[this.#index - 1];
  }
}
