const takeUntil = function (array, callback) {
  container = [];
  for (let i = 0; i < array.length; i++) {
    if ((callback(array[i])) === false) {
      container.push[i];
    } else {
      return container;
    }
  }
};
