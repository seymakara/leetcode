var threeSum = function (nums) {
  // https://tstewart.herokuapp.com/3sum-javascript/y

  var ret = []; //ret is "return"
  if (!nums || nums.length < 3) return ret;

  // sort the array
  nums = nums.sort(function (a, b) { return a - b; });

  //the first statement in our for-loop will allow the first iteration to run and skip over any subsequent iterations that would lead to the same calulation.

  for (var i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      var j = i + 1;
      var k = nums.length - 1;

      // the plan is to pull j and k closer together - checking each time for the sum array values to equal 0. If it does, we'll add it to the array we're going to return, increment j, decrement k, 
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          ret.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;

          //skip duplicates from j iterator
          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }
          //skip duplicates from k iterator
          while (j < k && nums[k] === nums[k + 1]) {
            k--;
          }
        }
        //if sum < 0 then we know we need to increase our lower number (remember the array is sorted)
        else if (sum < 0) {
          j++;
        }
        //if sum > 0 then we need to decrease our upper number
        else {
          k--
        }
      }
    }
  }
  return ret;
};