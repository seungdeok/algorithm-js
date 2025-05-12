class Stack {
  #arr = [];
  #index = 0;

  push(item) {
    this.#arr[this.#index++] = item;
    return this.#arr.length;
  }

  pop() {
    if (this.#index === 0) return null;
    return this.#arr[--this.#index];
  }

  peek() {
    return this.#arr[this.#index - 1];
  }

  print() {
    const arr = [];
    for (let i = 0; i < this.#index; i++) {
      arr.push(this.#arr[i]);
    }
    return arr;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.print());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.print());
