var isPalindrome = function (x) {
  if (x < 0) return false;
  let tempX = x;
  reversedDigit = 0;

  while (tempX != 0) {
    let remainder = tempX % 10;
    reversedDigit = reversedDigit * 10 + remainder;
    tempX = Math.floor(tempX / 10);
  }

  return reversedDigit === x;
};