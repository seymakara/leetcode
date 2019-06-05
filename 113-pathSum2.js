var pathSum = function (root, sum) {

  var result = [];

  var helper = (root, sum, arr) => {
    if (!root) return;

    sum -= root.val;
    arr.push(root.val);

    if (sum === 0 && !root.left && !root.right) {
      result.push(arr);
    } else {
      helper(root.left, sum, arr.slice());
      helper(root.right, sum, arr.slice());
    }
  }

  helper(root, sum, []);
  return result;

};