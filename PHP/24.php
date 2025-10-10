class Solution {
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
}