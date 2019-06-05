var inorderTraversal = function (root) {
  let res = [];
  helper(root);

  function helper(root) {
    if (!root) return [];
    helper(root.left);
    res.push(root.val);
    helper(root.right);
  }

  return res;
};