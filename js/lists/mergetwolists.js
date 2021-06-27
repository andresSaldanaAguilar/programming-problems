function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  let mergedList = new ListNode();
  let head = mergedList;
  if (l1 == null && l2 == null) return null;
  while (l1 !== null || l2 !== null) {
    if (l2 === null) {
      mergedList.val = l1.val;
      if (l1.next !== null) mergedList.next = new ListNode();
      mergedList = mergedList.next;
      l1 = l1.next;
    } else if (l1 === null) {
      mergedList.val = l2.val;
      if (l2.next !== null) mergedList.next = new ListNode();
      mergedList = mergedList.next;
      l2 = l2.next;
    } else if (l1.val <= l2.val) {
      mergedList.val = l1.val;
      mergedList.next = new ListNode();
      mergedList = mergedList.next;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      mergedList.val = l2.val;
      mergedList.next = new ListNode();
      mergedList = mergedList.next;
      l2 = l2.next;
    }
  }
  return head;
};

console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(3))),
    new ListNode(2, new ListNode(3, new ListNode(4)))
  )
);
