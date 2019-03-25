var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let shortestStrLength = Math.min(...strs.map(({ length }) => length));
  let common = "";

  for (let i = 0; i < shortestStrLength; i++) {
    let current = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (current != strs[j][i]) {
        return common;
      }
    }
    common += current;
  }
  return common;
};