var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;
  const root = postorder.pop();
  const node = new TreeNode(root);
  const rootIndex = inorder.indexOf(root);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftPostorder.length);

  console.log("leftInorder", rightPostorder)

  node.left = leftInorder.length ? buildTree(leftInorder, leftPostorder) : null;
  node.right = rightInorder.length ? buildTree(rightInorder, rightPostorder) : null;

  return node;
};