# @param [Array<Integer>] nums
# @param [Integer] target
# @return [Integer]
def search(nums, target)
    i = 0
    j = nums.length - 1
    while i < j
        mid = i + (j - i) / 2
        if nums[i] <= nums[mid]
            if target >= nums[i] && target <= nums[mid]
                j = mid
            else
                i = mid + 1
            end
        else
            if target <= nums[j] && target >= nums[mid]
                i = mid
            else
                j = mid - 1
            end
        end
    end
    return nums[i] == target ? i : -1
end
