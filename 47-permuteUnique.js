var permuteUnique = function (nums) {

  let results = [];

  nums.sort((a, b) => {
    return a - b;
  });

  (function getPermutations(prefix, rest) {

    if (rest.length === 0) {
      results.push(prefix);
      return;
    }

    for (let i = 0; i < rest.length; i++) {
      if (i > 0 && rest[i] === rest[i - 1]) continue;
      getPermutations(prefix.concat(rest[i]), rest.slice(0, i).concat(rest.slice(i + 1)));
    }

  })([], nums);

  return results;

};