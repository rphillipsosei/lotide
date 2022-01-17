const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🚨🚨 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};
const eqObjects = function (object1, object2) {
  objOneArr = Object.keys(object1);
  objTwoArr = Object.keys(object2);
  if (Object.keys(object1).length === Object.keys(object2).length) {
    return false;
  }
  for (element of objOneArr) {
    if (
      Array.isArray(element) &&
      !eqArrays(object1[element], object2[element])
    ) {
      return false;
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};


