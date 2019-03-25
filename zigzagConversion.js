var convert = function (s, numRows) {
  if (s.length < numRows || numRows === 1) return s;

  let rowArray = []
  let converted = '';
  let level = 0;
  let reverse = false;

  for (let i = 0; i < numRows; i++) rowArray[i] = [];

  for (let i = 0; i < s.length; i++) {
    rowArray[level].push(s[i]);
    reverse ? level-- : level++;
    if (level === numRows - 1 || level === 0) reverse = !reverse;

  }

  return rowArray.reduce((converted, cur) => converted + cur.join(''), '');

};