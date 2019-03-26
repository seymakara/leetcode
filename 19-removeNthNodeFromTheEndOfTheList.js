var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};