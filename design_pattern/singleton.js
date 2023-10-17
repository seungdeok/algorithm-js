const Singleton = (() => {
  let instance;

  function init() {
    return {
      publicMethod: () => {
        return "hello method";
      },
      publicProp: "hello prop",
    };
  }

  return {
    getInstance: () => {
      if (instance) {
        return instance;
      }

      instance = init();
      return instance;
    },
  };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);
console.log(a.publicProp === b.publicProp);
