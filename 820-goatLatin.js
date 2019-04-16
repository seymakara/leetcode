var toGoatLatin = function (S) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  let strs = S.split(' ');
  let ending = 'a'
  for (let i = 0; i < strs.length; i++) {
    if (vowels.includes(strs[i][0].toLowerCase())) {
      strs[i] += 'ma' + ending
    } else {
      strs[i] = strs[i].slice(1) + strs[i][0] + 'ma' + ending
    }
    ending += 'a';
  }
  return strs.join(' ');
};