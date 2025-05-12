const map = new Map();
map.set("a", 1);
map.set("b", 2);
for (const item of map) {
  console.log(item);
}

const weakMap = new WeakMap();
weakMap.set({ name: "a" }, 1);
weakMap.set({ name: "b" }, 2);
console.log(weakMap);

const set = new Set();
set.add(1);
set.add(2);
for (const item of set) {
  console.log(item);
}

const weakSet = new WeakSet();
weakSet.add({ name: "a" });
weakSet.add({ name: "b" });
console.log(weakSet);
