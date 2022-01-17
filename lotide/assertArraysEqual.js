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
