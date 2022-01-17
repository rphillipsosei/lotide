
const eqArrays = require('./eqArrays');

function assertArraysEqual($expected, $actual) {
  if (eqArrays($expected, $actual)) {
    console.log(`Assertion Passed:' ${$actual}  === ${$expected}`);
  } else {
    console.log(`Assertion Failed:' ${$actual} !===  ${$expected}`);
  }
};



const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
    }
    console.log('results: ', results)
    
    return results;
    
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
console.log('results1: ', results1)
// const results3 = map(words, word => word.toUpperCase());
// console.log(results1);
// assertArraysEqual(results1,['323'])
// const callback =  word => word[0]
//  console.log('item after', test('str'))