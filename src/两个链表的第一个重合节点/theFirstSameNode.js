/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * 给定两个单链表的头节点 headA 和 headB ，请找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 */
/**
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 */
/**
 * 输出：Intersected at '8'
 */
var getIntersectionNode = function (headA, headB) {
    // 把headA中的点和headB中的点作比较，看是否有相交的，有相交的返回第一个相交的点，没有返回null
    // 1. A和B有一个空，return null;
    if (headA === null || headB === null)
        return null;
    // 2. 双指针，分别指向两个链表的头节点
    let pa = headA,
        pb = headB;
    // 同步移动，如果pa/pb存在，往下走；pa/pb 指向null，就指向对方链表的头节点
    while (pa !== pb) {
        pa = pa === null ? headB : pa.next;
        pb = pb === null ? headA : pb.next;
    }
    return pa;
};