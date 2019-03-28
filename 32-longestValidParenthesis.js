// The workflow of the solution is as below.

//      1. Scan the string from beginning to end.
//      2.If current character is '(',
//              push its index to the stack. 
//        else[If current character is  ')'] and the character at the index of the top of stack is '(', we just find a matching pair 
//              so pop from the stack. 
//        Otherwise, we push the index of ')' to the stack.
//      3. After the scan is done, the stack will only contain the indices of characters which cannot be matched. 
//         Then let's use the opposite side - substring between adjacent indices should be valid parentheses.
//      4. If the stack is empty, the whole input string is valid. Otherwise, we can scan the stack to get longest
//         valid substring as described in step 3.

var longestValidParentheses = function (s) {
  let stack = [];
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    if (cur === '(') {
      stack.push(i);
    } else {
      if (stack.length !== 0) {
        if (s[stack[stack.length - 1]] === '(') {
          stack.pop();
        } else {
          stack.push(i);
        }
      } else {
        stack.push(i);
      }
    }
  }
  if (stack.length === 0) longest = s.length;
  else {
    let right = s.length;
    let left = 0;
    while (stack.length !== 0) {
      left = stack[stack.length - 1];
      stack.pop();
      longest = Math.max(longest, right - left - 1);
      right = left;
    }
    longest = Math.max(longest, right)
  }
  return longest;
};
