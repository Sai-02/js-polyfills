Array.prototype.reducePolyfill = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(this[i], acc) : this[i];
  }
  return acc;
};

const arr = [1, 2, 3, 4, 5];

const sum = arr.reducePolyfill((val, acc) => {
  return val + acc;
}, 0);
console.log(sum);
