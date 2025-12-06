func nextPermutation(nums []int)  {
    var swap1, swap2 int
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[j] > nums[i] {
                swap1, swap2 = i, j
            }
        }
    }
    if swap1 != swap2 {
        nums[swap1], nums[swap2] = nums[swap2], nums[swap1]
        swap1++
    }
    for i := swap1; i < len(nums); i++ {
        j := i
        for j > swap1 && nums[j-1] > nums[j] {
            nums[j-1], nums[j] = nums[j], nums[j-1]
            j--
        }
    }
}