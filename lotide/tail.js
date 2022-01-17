const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅✅ Assertion Passed: ${actual} equals ${expected}`);
    } else {
      console.log(`🚨🚨 Assertion Failed: ${actual} does not equal ${expected}`);
    }
  };

  
  const tail = function(array) {
    let newArr = [];  
    for(let i = 1; i < array.length; i++){
        newArr.push(array[i]);
    }
    return newArr;
  };

