class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  #root = null;
  #size = 0;

  constructor(data) {
    if (data) {
      this.#root = new Node(data);
      this.#size = 1;
    }
  }

  size() {
    return this.#size;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.#root === null) {
      this.#root = newNode;
      this.#size++;
      return this;
    }

    const insertNode = (node, newNode) => {
      if (newNode.data === node.data) {
        return;
      }

      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
          this.#size++;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
          this.#size++;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    insertNode(this.#root, newNode);
    return this;
  }

  search(data) {
    const searchNode = (node, data) => {
      if (node === null) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    };

    return searchNode(this.#root, data);
  }

  // 중위 순회 (왼쪽 -> 루트 -> 오른쪽)
  inOrder() {
    const result = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        result.push(node.data);
        traverse(node.right);
      }
    };

    traverse(this.#root);
    return result;
  }

  // 전위 순회 (루트 -> 왼쪽 -> 오른쪽)
  preOrder() {
    const result = [];

    const traverse = (node) => {
      if (node !== null) {
        result.push(node.data);
        traverse(node.left);
        traverse(node.right);
      }
    };

    traverse(this.#root);
    return result;
  }

  // 후위 순회 (왼쪽 -> 오른쪽 -> 루트)
  postOrder() {
    const result = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.data);
      }
    };

    traverse(this.#root);
    return result;
  }

  min() {
    if (this.#root === null) {
      return null;
    }

    let current = this.#root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this.#root === null) {
      return null;
    }

    let current = this.#root;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  remove(data) {
    // 최소값 찾는 헬퍼 함수
    const findMinNode = (node) => {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    };

    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // 경우 1: 리프 노드 (자식이 없는 경우)
        if (node.left === null && node.right === null) {
          this.#size--;
          return null;
        }

        // 경우 2: 하나의 자식만 있는 경우
        if (node.left === null) {
          this.#size--;
          return node.right;
        }

        if (node.right === null) {
          this.#size--;
          return node.left;
        }

        // 경우 3: 두 자식이 모두 있는 경우
        // 오른쪽 서브트리에서 가장 작은 노드를 찾음
        const successor = findMinNode(node.right);
        node.data = successor.data;

        // 자식 노드를 재귀적으로 삭제
        node.right = removeNode(node.right, successor.data);
        return node;
      }
    };

    this.#root = removeNode(this.#root, data);
    return this;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log("원래 트리:", bst.inOrder()); // [3, 5, 7, 10, 12, 15, 20]
console.log("트리 크기:", bst.size()); // 7

// 리프 노드 삭제
bst.remove(3);
console.log("3 삭제 후:", bst.inOrder()); // [5, 7, 10, 12, 15, 20]
console.log("트리 크기:", bst.size()); // 6

// 한 자식을 가진 노드 삭제
bst.remove(5);
console.log("5 삭제 후:", bst.inOrder()); // [7, 10, 12, 15, 20]
console.log("트리 크기:", bst.size()); // 5

// 두 자식을 가진 노드 삭제
bst.remove(15);
console.log("15 삭제 후:", bst.inOrder()); // [7, 10, 12, 20]
console.log("트리 크기:", bst.size()); // 4

// 루트 노드 삭제
bst.remove(10);
console.log("10(루트) 삭제 후:", bst.inOrder()); // [7, 12, 20]
console.log("트리 크기:", bst.size()); // 3
