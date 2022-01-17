function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArrayEquals(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅Assertion Passed: ${actual} is equal to ${expected}`);
  } else {
    console.log(`🚨🚨Assertion Failed: ${actual} is not equal to ${expected}`);
  }
}

const middle = function (arr) {
      let oddVal = arr[Math.floor(arr.length / 2)];
      let midIn = Math.floor(arr.length / 2);
      let evenVal = [ arr[midIn - 1], arr[midIn]];

      if (arr.length % 2 !== 0) {
      return [oddVal];
    } else {
      return evenVal;
    }
  };
console.log(middle([1, 2, 3, 4]))