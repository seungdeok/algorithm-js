class MinHeap {
  constructor() {
    this.heap = [null]; // 0번 인덱스는 사용하지 않음
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[parentIndex][0] > this.heap[currentIndex][0] // 거리
    ) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 힙이 비어있으면 0 반환
    if (this.heap.length <= 1) return null;

    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (
      (leftChildIndex < this.heap.length &&
        this.heap[currentIndex] > this.heap[leftChildIndex]) ||
      (rightChildIndex < this.heap.length &&
        this.heap[currentIndex] > this.heap[rightChildIndex])
    ) {
      // 왼쪽 자식이 오른쪽 자식보다 작거나, 오른쪽 자식이 없는 경우
      if (
        rightChildIndex >= this.heap.length ||
        this.heap[leftChildIndex] < this.heap[rightChildIndex]
      ) {
        [this.heap[currentIndex], this.heap[leftChildIndex]] = [
          this.heap[leftChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftChildIndex;
      } else {
        [this.heap[currentIndex], this.heap[rightChildIndex]] = [
          this.heap[rightChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightChildIndex;
      }

      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  isEmpty() {
    return this.heap.length <= 1;
  }

  peek() {
    return this.heap.length <= 1 ? 0 : this.heap[1];
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let index = this.size() - 1;
    const inserted = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= inserted) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = inserted;
  }

  heapifyDown() {
    let index = 0;
    const count = this.size();
    const root = this.heap[index];

    while (index < count) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;

      if (leftIndex >= count) break;

      const smallerChildIndex =
        rightIndex < count && this.heap[rightIndex] < this.heap[leftIndex]
          ? rightIndex
          : leftIndex;

      if (root <= this.heap[smallerChildIndex]) break;

      this.heap[index] = this.heap[smallerChildIndex];
      index = smallerChildIndex;
    }

    this.heap[index] = root;
  }

  peek() {
    return this.heap[0] || null;
  }
}
