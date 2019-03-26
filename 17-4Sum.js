var fourSum = function (nums, target) {
  var res = []; //ret is "return"
  if (!nums || nums.length < 3) return res;

  nums = nums.sort(function (a, b) { return a - b; });
  for (let i = 0; i < nums.length - 3; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j === i + 1 || nums[j] > nums[j - 1]) {
          k = j + 1;
          m = nums.length - 1;
          while (k < m) {
            let tempSum = nums[i] + nums[j] + nums[k] + nums[m];
            if (tempSum === target) {
              res.push([nums[i], nums[j], nums[k], nums[m]])
              k++;
              m++;
              while (k < m && nums[k] === nums[k - 1]) {
                k++;
              }

              while (k < m && nums[m] === nums[m + 1]) {
                m--;
              }
            }

            if (tempSum < target) {
              k++;
            }
            if (tempSum > target) {
              m--;
            }
          }
        }
      }
    }

  }
  return res;

};
