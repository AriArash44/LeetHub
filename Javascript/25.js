/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (k === 1) {
        return head;
    }
    let i = 1;
    let finalHead = head, kTail = head, prevTail = null;
    let cur = head, next = head.next;
    let finalPart = null;
    let finalPartHead = structuredClone(head);
    while(next !== null) {
        if (i % k !== 0) {
            if (i % k === 1) {
                cur.next = null;
            }
            let temp = next.next;
            next.next = cur;
            cur = next;
            next = temp;
        }
        else {
            if (i === k) {
                finalHead = cur;
            }
            else {
                prevTail.next = cur;
            }
            kTail.next = next;
            prevTail = kTail;
            kTail = next;
            cur = next;
            next = next.next;
        }
        finalPartHead = finalPartHead.next;
        if (i % k === 0) {
            finalPart = null;
        }
        else if (i % k === 1) {
            finalPart = structuredClone(finalPartHead);
        }
        i += 1;
    }
    if(i % k === 0) {
        let cur = finalPart, next = finalPart.next;
        let flag = true;
        while (next !== null) {
            if (flag) {
                cur.next = null;
                flag = false;
            }
            let temp = next.next;
            next.next = cur;
            cur = next;
            next = temp;
        }
        finalPart = cur;
        let finalTemp = finalHead;
        if (finalTemp.next !== null) {
            while (finalTemp.next.next !== null) {
                finalTemp = finalTemp.next;
            }
            let last = finalTemp.next;
            finalTemp.next = finalPart;
            while (finalTemp.next !== null) {
                finalTemp = finalTemp.next;
            }
            finalTemp.next = last;
        }
        else {
            let last = finalHead;
            finalHead = finalPart;
            while (finalPart.next !== null) {
                finalPart = finalPart.next;
            }
            finalPart.next = last;
        }
    }
    else {
        let finalTemp = finalHead;
        while (finalTemp.next !== null) {
            finalTemp = finalTemp.next;
        }
        finalTemp.next = finalPart;
    }
    return finalHead;
};