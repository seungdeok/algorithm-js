class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr[this.index++] = item;
  }

  pop() {
    if (this.index <= 0) return null;
    return this.arr[--this.index];
  }

  size() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
