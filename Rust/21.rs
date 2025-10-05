impl Solution {
    pub fn merge_two_lists(
        mut list1: Option<Box<ListNode>>,
        mut list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut solution;
        if list1 == None && list2 == None {
            return None;
        }
        else if list1 == None {
            return list2;
        }
        else if list2 == None {
            return list1;
        }
        if list1.as_ref().unwrap().val < list2.as_ref().unwrap().val {
            solution = list1.take();
            list1 = solution.as_mut().unwrap().next.take();
        } else {
            solution = list2.take();
            list2 = solution.as_mut().unwrap().next.take();
        }
        let mut temp_sol = solution.as_mut().unwrap();
        while list1.is_some() && list2.is_some() {
            if list1.as_ref().unwrap().val < list2.as_ref().unwrap().val {
                let next = list1.as_mut().unwrap().next.take();
                temp_sol.next = list1.take();
                list1 = next;
            } else {
                let next = list2.as_mut().unwrap().next.take();
                temp_sol.next = list2.take();
                list2 = next;
            }
            temp_sol = temp_sol.next.as_mut().unwrap();
        }
        temp_sol.next = if list1.is_some() { list1 } else { list2 };
        solution
    }
}