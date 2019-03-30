var isValidSudoku = function (board) {
  if (areRowsValid(board) && areColumnsValid(board) && areBoxesValid(board)) {
    return true;
  }
  return false;
};

var duplicateCheck = (arr) => {
  let nums = []
  for (let item of arr) {
    if (item !== ".") {
      nums.push(item);
    }
  }
  if (new Set(nums).size === nums.length) {
    return false;
  }
  return true;
}

var areRowsValid = (board) => {
  for (let row of board) {
    if (duplicateCheck(row)) {
      return false;
    }
  }
  return true;
}

var areColumnsValid = (board) => {
  let column = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (duplicateCheck(column)) {
      return false;
    }
    column = [];
  }
  return true;
}

var areBoxesValid = (board) => {
  for (var i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let boxList = [];
      for (let k = 0; k < 3; k++) {
        for (let m = 0; m < 3; m++) {
          boxList.push(board[i + k][j + m]);
        }
      }
      if (duplicateCheck(boxList)) {
        return false;
      }

    }
  }
  return true;
}



