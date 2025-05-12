function createObject(target, cb) {
  const proxy = new Proxy(target, {
    get() {},
    set(obj, prop, value) {
      if (value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        cb(`${prop}: ${prev} > ${value} 변경`);
      }
      return true;
    },
    has() {},
  });
  return proxy;
}

const a = {
  person: "솔로",
};

const b = createObject(a, console.log);

b.person = "솔로";
b.person = "커플";
