// const assertEqual = function(actual, expected) {
//     if(actual === expected) {
//         console.log(`Assertion Passed:' ${actual}  === ${expected}` )
//     } else {
//         console.log(`Assertion Failed:' ${actual}  !===  ${expected}` )
//     }
//    };

//    findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//    }, x => x.stars === 2)

const findKey = function (obj, callback) {
  const names = Object.keys(obj);
  //console.log(property)
  for (element of obj)
    if (callback(obj[element]) === true) {
      return element;
    }
};
