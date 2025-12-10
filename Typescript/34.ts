function searchRange(nums: number[], target: number): number[] {
    const result = [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            break;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if(nums[mid] === target) {
        let start = mid, end = mid;
        while(nums[start] === target && start >= 0) {
            start--;
        }
        result[0] = start + 1;
        while(nums[end] === target && end <= nums.length - 1) {
            end++;
        }
        result[1] = end - 1;
    }
    return result;
};