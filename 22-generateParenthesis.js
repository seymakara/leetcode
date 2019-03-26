var generateParenthesis = function (n) {
  let parens = [];

  const generate = (oneSet, left, right) => {
    if (left) {
      generate(oneSet + '(', left - 1, right);
    }
    if (right > left) {
      generate(oneSet + ')', left, right - 1);
    }
    if (!right) {
      parens.push(oneSet)
    }
    return parens
  }

  return generate('', n, n)

};