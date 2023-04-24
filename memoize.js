const memoize = function (cb, context) {
  const cache = {};

  return function () {
    const key = JSON.stringify(...arguments);
    if (!cache[key]) {
      cache[key] = cb.apply(context || this, arguments);
    }
    return cache[key];
  };
};

const memoizeMultiply = memoize((a, b) => {
  for (let i = 0; i < 1000000; i++) {}
  return a * b;
});
console.time("First call");
console.log(memoizeMultiply(1, 2));
console.timeEnd("First call");

console.time("Second Call");
console.log(memoizeMultiply(1, 2));
console.timeEnd("Second Call");

console.time("Third Call");
console.log(memoizeMultiply(2, 3));
console.timeEnd("Third Call");

console.time("Fourth Call");
console.log(memoizeMultiply(2, 3));
console.timeEnd("Fourth Call");
