class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.len = 0;
  }

  size() {
    return this.len;
  }

  insert(data) {
    let newNode = new Node(data);
    let curNode = this.root;

    while (curNode) {
      if (data === curNode.data) {
        return;
      }

      if (data < curNode.data) {
        if (!curNode.left) {
          curNode.left = newNode;
          this.len += 1;
          return;
        }
        curNode = curNode.left;
      }

      if (data > curNode.data) {
        if (!curNode.right) {
          curNode.right = newNode;
          this.len += 1;
          return;
        }
        curNode = curNode.right;
      }
    }
  }

  /** Stack */
  DFS() {
    const result = [];
    const stack = [this.root];

    while (stack.length !== 0) {
      const cur = stack.pop();
      if (cur.right) {
        stack.push(cur.right);
      }
      if (cur.left) {
        stack.push(cur.left);
      }
      result.push(cur.data);
    }
    return result;
  }

  /** Queue  */
  BFS() {
    const result = [];
    const queue = [this.root];

    while (queue.length !== 0) {
      const cur = queue.shift();
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
      result.push(cur.data);
    }
    return result;
  }
}
