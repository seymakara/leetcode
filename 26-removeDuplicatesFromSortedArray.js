var removeDuplicates = function (nums) {

  if (nums.lenght === 0) {
    return 0
  }

  let idx = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[idx]) { // if same keep comparing idx with the res of the list. if not same:
      idx += 1 // increment idx one and change nums[idx] to nums[i]
      nums[idx] = nums[i]
    }
  }
  return idx + 1 // because it starts from 0

};