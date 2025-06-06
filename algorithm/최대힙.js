class MaxHeap {
  constructor(nums) {
    this.heap = nums;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  push(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const max = this.heap.pop();
    this.shiftDown(0);

    return max;
  }

  shiftUp(i) {
    const parentIndex = Math.floor((i - 1) / 2);

    if (parentIndex >= 0 && this.heap[i] > this.heap[parentIndex]) {
      [this.heap[i], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[i],
      ];
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(i) {
    const leftChildIndex = 2 * i + 1;
    const rightChildIndex = 2 * i + 2;
    let maxIndex = i;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }

    if (maxIndex !== i) {
      [this.heap[maxIndex], this.heap[i]] = [this.heap[i], this.heap[maxIndex]];
      this.shiftDown(maxIndex);
    }
  }
}
