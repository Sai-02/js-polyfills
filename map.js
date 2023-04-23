Array.prototype.mapPolyfill = function (cb) {
  const tempArray = [];
  for (let i = 0; i < this.length; i++) {
    tempArray.push(cb(this[i]));
  }
  return tempArray;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.mapPolyfill((val) => val * 2));
