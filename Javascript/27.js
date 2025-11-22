function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let valNum = 0, totalNum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - valNum] === val) {
            swap(nums, i - valNum, totalNum - 1 - valNum);
            valNum += 1;
        }
    }
    return totalNum - valNum;
};