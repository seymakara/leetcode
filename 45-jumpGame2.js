var jump = function (nums) {
  let jumps = 0;
  let curEnd = 0;
  let curFarthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curFarthest = Math.max(curFarthest, i + nums[i]);
    if (i === curEnd) {
      jumps++;
      curEnd = curFarthest;
      console.log('curEnd', curEnd)
    }
  }
  return jumps;
};