// CJS

const main = (() => {
  const a = 1;
  const b = () => 2;

  const public = {
    c: 3,
    d: () => 4,
  };

  return public;
})();
console.log(main.a, main.b, main.c, main.d);
