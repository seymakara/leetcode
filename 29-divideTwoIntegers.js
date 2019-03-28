var divide = function (dividend, divisor) {
  let neg = (dividend < 0) !== (divisor < 0)
  let quotient = 1;
  let res = 0
  let dividend2 = Math.abs(dividend);
  let divisor2 = Math.abs(divisor);
  while (dividend2 >= divisor2) {
    dividend2 -= divisor2;
    res += quotient;
    quotient += quotient;
    divisor2 += divisor2;
    if (dividend2 < divisor2) {
      divisor2 = Math.abs(divisor);
      quotient = 1;
    }
  }
  if (neg) {
    return Math.max(-res, -2147483648)
  } else {
    return Math.min(res, 2147483647)
  }
};
