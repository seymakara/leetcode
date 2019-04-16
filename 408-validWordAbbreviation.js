/*
Given a non - empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.

A string such as "word" contains only the following valid abbreviations:

["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
*/

const validWordAbbreviation = (word, abbr) => {
  let size = word.length;
  let count = 0;
  let loc = 0;

  for (char of abbr) {
    if (!isNaN(char)) {
      if (char === 0) return false;
      count = count * 10 + Number(char)
    } else {
      loc += count;
      count = 0;
      if (loc >= size || word[loc] !== char) return false;
      loc++
    }
  }
  return loc + count === size;

}

console.log(validWordAbbreviation('word', '2rd'))


// class Solution(object):
//     def validWordAbbreviation(self, word, abbr):
//         """
//         :type word: str
//         :type abbr: str
//         :rtype: bool
//         """
//         size = len(word)
//         cnt = loc = 0
//         for w in abbr:
//             if w.isdigit():
//                 if w == '0' and cnt == 0:
//                     return False
//                 cnt = cnt * 10 + int(w)
//             else:
//                 loc += cnt
//                 cnt = 0
//                 if loc >= size or word[loc] != w:
//                     return False
//                 loc += 1
//         return loc + cnt == size
