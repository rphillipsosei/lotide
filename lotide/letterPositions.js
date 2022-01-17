const letterPositions = function (sentence) {
  let results = {};

  let lowercased = sentence.toLowerCase();

  for (let i = 0; i < lowercased.length; i++) {
    if (results[lowercased[i]]) {
      results[lowercased[i]].push(i);
    } else {
      results[lowercased[i]] = [i];
    }
    
  }
  return results;
};



