class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this.#hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const target = this.#hash(key);
    return this.table[target];
  }

  remove(key) {
    const index = this.#hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = [];
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

const ht = new HashTable();
ht.set("A", 300);
ht.set("B", 100);
ht.set("C", 110);
console.log(ht.get("A"));
console.log(ht.get("B"));
console.log(ht.get("C"));
console.log(ht.remove("C"));
console.log(ht.get("C"));
