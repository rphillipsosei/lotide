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
  
  const assertObjectsEqual = function(actual, expected) {
    if(eqObjects(actual, expected)) {
        console.log(`Assertion Passed:' ${actual}  === ${expected}` ) 
    } else {
        console.log(`Assertion Failed:' ${actual}  !===  ${expected}` )
    }   
   };

   
    
   
   
