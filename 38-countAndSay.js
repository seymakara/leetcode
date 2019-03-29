var countAndSay = function (n) {
  let seq = '1';
  for (let i = 1; i < n; i++) {
    let char = seq[0];
    let temp = '';
    let count = 0;
    for (l of seq) {
      if (char === l) {
        count += 1;
      } else {
        temp += String(count) + char;
        char = l;
        count = 1;
      }
    }
    temp += String(count) + char;
    seq = temp;
  }
  return seq;
};