impl Solution {
    pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
        if lists.is_empty() {
            return None;
        }
        let mut lists = lists;
        let mut dummy = Box::new(ListNode::new(0));
        let mut current = &mut dummy;
        loop {
            let mut min_val = i32::MAX;
            let mut min_index = None;
            for (i, list) in lists.iter().enumerate() {
                if let Some(node) = list {
                    if node.val < min_val {
                        min_val = node.val;
                        min_index = Some(i);
                    }
                }
            }
            if min_index.is_none() {
                break;
            }
            let min_idx = min_index.unwrap();
            let mut node = lists[min_idx].take().unwrap();
            lists[min_idx] = node.next.take();
            current.next = Some(node);
            current = current.next.as_mut().unwrap();
        }
        dummy.next
    }
}