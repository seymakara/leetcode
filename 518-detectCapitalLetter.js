var detectCapitalUse = function (word) {
  let capCount = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === char.toUpperCase()) capCount++;
  }
  if (capCount === 1 && word[0] === word[0].toUpperCase()) return true;
  if (capCount === 0 || capCount === word.length) return true;
  return false;
};