const isBalanced = (root) => {
  if (!root) return true;
  const getHeight = (root) => {
    if (!root) return 0;
    return 1 + Math.max(getHeight(root.right), getHeight(root.left));
  }

  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}