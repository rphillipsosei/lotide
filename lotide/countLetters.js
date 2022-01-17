const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅ Assertion Passed: ${actual} equals ${expected}`);
    } else {
      console.log(`🚨🚨 Assertion Failed: ${actual} does not equal ${expected}`);
    }
  };

   const countLetters = function(string) {
      
    let letterObj = {}
    
    for(let i = 0; i < string.length; i++) {
         const lowercase = string.toLowerCase()
         
         

         if(letterObj[lowercase[i]]) {
          // if letterObj with a key of the iteration is true
            letterObj[lowercase[i]] = letterObj[lowercase[i]] + 1
            //add one to the value of the key
         } else {
            letterObj[lowercase[i]] = 1
            //otherwise, keep its value at 0
         }
        
        }
         return letterObj
       };
   
