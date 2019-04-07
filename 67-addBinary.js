var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';
  while (i >= 0 || j >= 0) {
    let digitA = Number(a[i]) || 0;
    let digitB = Number(b[j]) || 0;
    let sum = digitA + digitB + carry;
    let digit = sum % 2;
    carry = Math.floor(sum / 2);
    result = digit + result;
    i--;
    j--;
  }
  if (carry !== 0) result = carry + result;
  return result;
};
