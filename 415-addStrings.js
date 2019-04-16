var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = '';

  for (; i >= 0 || j >= 0 || carry > 0; i-- , j--) {
    let digit1 = i < 0 ? 0 : Number(num1[i]);
    let digit2 = j < 0 ? 0 : Number(num2[j]);
    let digitsSum = digit1 + digit2 + carry;
    sum = String(digitsSum % 10) + sum;
    carry = Math.floor(digitsSum / 10);
  }

  return sum;
};
