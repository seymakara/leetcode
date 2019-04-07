var rotateRight = function (head, k) {
  if (!head || !head.next || k == 0) {
    return head;
  }

  let fast = head;
  let slow = head;
  let tail = head;
  let len = 1;

  while (tail.next) {
    tail = tail.next;
    len++;
  }

  k = k % len;

  if (k === 0) {
    return head;
  }


  for (let i = 0; i < k; i++) {
    fast = fast.next
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  let newHead = slow.next;
  fast.next = head;
  slow.next = null;

  return newHead;
};