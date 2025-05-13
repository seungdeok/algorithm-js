class StackUsingQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue1.push(x);
  }

  pop() {
    if (this.queue1.length === 0) {
      return null;
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const lastElement = this.queue1.shift();

    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return lastElement;
  }

  peek() {
    if (this.queue1.length === 0) {
      return null;
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const lastElement = this.queue1.shift();
    this.queue2.push(lastElement);

    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return lastElement;
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  size() {
    return this.queue1.length;
  }
}
