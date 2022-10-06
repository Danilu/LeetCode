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
#include <stdio.h>
#include <iostream>
using namespace std;
struct ListNode
{
    int val;        //当前节点的值
    ListNode *next; // the next node
    ListNode(int x) : val(x), next(NULL){};
    ListNode *head; // the head node
};

class Solution
{
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
    {
        // while headA or headB is empty
        if (headA == nullptr || headB == nullptr)
            return nullptr;
        ListNode *pa = headA,
                 *pb = headB;
        while (pa != pb)
        {
            pa = pa == nullptr ? headB : pa->next;
            pb = pb == nullptr ? headA : pb->next;
        }
        return pa;
    }
};