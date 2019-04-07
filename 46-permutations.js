var permute = function (nums) {
  const res = [];
  backtrack(nums, res);
  return res;
};

function backtrack(nums, res, n = 0) {
  if (n === nums.length - 1) {
    res.push(nums.slice(0));
    return;
  }
  for (let i = n; i < nums.length; i++) {
    [nums[i], nums[n]] = [nums[n], nums[i]];
    backtrack(nums, res, n + 1);
    [nums[i], nums[n]] = [nums[n], nums[i]];
  }
}

var permute = function (nums) {
  results = []
  const helper = function (remaining, current) {
    // current = current || [];

    if (remaining.length === 0) {
      results.push(current)
    }
    for (let i = 0; i < remaining.length; i++) {
      helper(remaining.slice(0, i).concat(remaining.slice(i + 1)), current.concat(remaining[i]))
    }
  }
  helper(nums, []);
  return results;
};

