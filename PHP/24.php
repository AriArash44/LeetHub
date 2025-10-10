<!-- class Solution {
    /**
     * @param ListNode $head
     * @return ListNode
     */
    function swapPairs($head) {
        $current = $head;
        while ($current != null && $current->next != null) {
            $temp = $current->val;
            $current->val = $current->next->val;
            $current->next->val = $temp;
            $current = $current->next->next;
        }
        return $head;
    }
} -->
    
class Solution {
    /**
     * @param ListNode $head
     * @return ListNode
     */
    function swapPairs($head) {
        if (($head == null || $head->next == null)) {
            return $head;
        }
        $dummy = new ListNode(0);
        $dummy->next = $head;
        $prev = $dummy;
        $current = $head;
        while ($current != null && $current->next != null) {
            $first = $current;
            $second = $current->next;
            $nextPair = $second->next;
            $prev->next = $second;
            $second->next = $first;
            $first->next = $nextPair;
            $prev = $first;
            $current = $nextPair;
        }
        return $dummy->next;
    }
}