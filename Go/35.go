package leetcode

func searchInsert(nums []int, target int) int {
	if len(nums) == 1 {
		if target <= nums[0] {
			return 0
		}
		return 1
	}
	mid := len(nums) / 2
	end := len(nums)
	if nums[mid] == target {
		return mid
	} else if target < nums[mid] {
		return searchInsert(nums[0:mid], target)
	} else {
		return mid + searchInsert(nums[mid:end], target)
	}
}
