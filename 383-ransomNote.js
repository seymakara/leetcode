var canConstruct = function (ransomNote, magazine) {
  let hash = {};
  for (char of magazine) {
    if (!(char in hash)) hash[char] = 1;
    else hash[char] += 1
  }

  for (char of ransomNote) {
    if (hash[char] === undefined || hash[char] === 0) return false;
    else hash[char]--
  }
  return true;
};