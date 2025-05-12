class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  autoComplete(prefix) {
    let currentNode = this.root;
    let result = [];

    if (!prefix) {
      return [];
    }

    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return [];
      } else {
        currentNode = currentNode.children.get(char);
      }
    }

    const queue = [currentNode];

    while (queue.length > 0) {
      const node = queue.shift();

      // 현재 노드가 단어의 끝인 경우(접두어가 아닌 경우)
      if (node.isEndOfWord) {
        result.push(node.value);
      }

      for (const childNode of node.children.values()) {
        queue.push(childNode);
      }
    }

    return result;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
trie.insert("p");
trie.insert("party");
trie.insert("pan");
trie.insert("peek");
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));

console.log(trie.autoComplete("p"));
console.log(trie.autoComplete("ca"));
