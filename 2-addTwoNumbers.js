var addTwoNumbers = function (l1, l2) {
  let resHead = new ListNode(0);
  let res = resHead;
  let list1 = l1;
  let list2 = l2;
  let total;
  let total1;
  let total2;
  let carry = 0;
  while (list1 || list2 || carry) {
    total1 = 0;
    total2 = 0;

    if (list1) {
      total1 = list1.val;
      list1 = list1.next;
    }

    if (list2) {
      total2 = list2.val;
      list2 = list2.next;
    }

    total = (total1 + total2 + carry) % 10;
    carry = Math.floor((total1 + total2 + carry) / 10);

    resHead.next = new ListNode(total);
    resHead = resHead.next;
  }
  return res.next;

};