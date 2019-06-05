/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 已经定义完链表了我居然有自己傻写了一遍

var addTwoNumbers = function(l1, l2) {
let res = new ListNode(-1),cur=res,plus=0;	
		while (l1!==null||l2!=null){
			let num1=l1!==null?l1.val:0;
			let num2=l2!==null?l2.val:0;
            let sumall=num1+num2+plus;    	
              plus=sumall>=10?1:0;
			cur.next=new ListNode(sumall%10);	
            
			cur=cur.next;
			l1=l1?l1.next:l1;
			l2=l2?l2.next:l2;
		}
    if(plus==1){
        cur.next=new ListNode(1);	
    }
			return res.next;
	
};

