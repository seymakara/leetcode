var isSymmetric = function (root) {
  if (!root) return true;

  let isSymmetricHelper = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return (isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left));
  }
  return isSymmetricHelper(root.left, root.right);
};