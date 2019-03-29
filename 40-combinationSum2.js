var combine_sum_2 = (nums, start, path, result, target) => {
  //Base case: if the sum of the path satisfies the target, we will consider 
  //it as a solution, and stop there
  if (target === 0) {
    result.push(path);
    return
  }

  for (let i = start; i < nums.length; i++) {
    // Very important here! We don't use `i > 0` because we always want 
    // to count the first element in this recursive step even if it is the same 
    // as one before. To avoid overcounting, we just ignore the duplicates
    // after the first element.
    if (i > start && nums[i] === nums[i - 1]) continue


    // If the current element is bigger than the assigned target, there is 
    // no need to keep searching, since all the numbers are positive
    if (nums[i] > target) break

    // We change the start to `i + 1` because one element only could
    // be used once
    combine_sum_2(nums, i + 1, path.concat(nums[i]),
      result, target - nums[i])
  }
}