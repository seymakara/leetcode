var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }

  let nullHead = new ListNode(null)
  let headNode = nullHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      nullHead.next = l1;
      console.log(nullHead)
      l1 = l1.next;
    } else {
      nullHead.next = l2;
      l2 = l2.next;
    }

    nullHead = nullHead.next;
  }
  if (l1 || l2) {
    nullHead.next = l1 !== null ? l1 : l2;
  }
  return headNode.next;
};


