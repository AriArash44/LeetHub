class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const headNode = head;
    let candidate: ListNode | null = head, preCandidate: ListNode | null = null, i = 0;
    while (head !== null) {
        if (i >= n) {
            candidate = candidate!.next;
            if (preCandidate === null) {
                preCandidate = headNode;
            }
            else{
                preCandidate = preCandidate.next;
            }
        }
        i += 1;
        head = head.next;
    }
    if (!preCandidate) {
        if (i <= 1) {
            return null;
        }
        return headNode!.next;
    }
    preCandidate.next = candidate!.next;
    return headNode;
};