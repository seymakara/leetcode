var binaryTreePaths = function (root) {
  let res = [];

  if (!root) return res;

  var helper = (root, string, res) => {
    string += root.val;

    if (!root.left && !root.right) {
      res.push(string)
    }
    if (root.left) {
      helper(root.left, string + "->", res)
    }
    if (root.right) {
      helper(root.right, string + "->", res)
    }
  }

  helper(root, '', res);
  return res;
};