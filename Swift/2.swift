public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}
 
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        let dummy = ListNode(0)
        var current = dummy
        var p = l1, q = l2
        var carry = 0
        while p != nil || q != nil || carry != 0 {
            let x = p?.val ?? 0
            let y = q?.val ?? 0
            let sum = x + y + carry
            carry = sum / 10
            current.next = ListNode(sum % 10)
            current = current.next!
            p = p?.next
            q = q?.next
        }
        return dummy.next
    }
}