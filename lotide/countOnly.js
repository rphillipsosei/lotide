const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🚨🚨 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let output = {};
  

  for (let item of allItems) {
      // loops through allitems array
    if (itemsToCount[item]) {
      // checks if the same item to count is found in the allitems array
        if (output[item]) {
            // checks if the item has been found before
        output[item] += 1;
        // increases count number by 1
      } else {
        output[item] = 1;
        // if item has not been found before, the count number should remain 1

        
      }
    }
  }
  return output
  // return results of implementation
};

