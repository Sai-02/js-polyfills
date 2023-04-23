Array.prototype.filterPolyfill = function (cb) {
    const tempArray = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) tempArray.push(this[i]);
    }
    return tempArray;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.filterPolyfill((val) => val % 2 == 0));
  