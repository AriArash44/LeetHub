class Solution {
    func maxArea(_ height: [Int]) -> Int {
        var start = 0, end = height.count - 1, result = 0
        while end > start {
            let candidateValue = (end - start) * min(height[start], height[end])
            if candidateValue > result {
                result = candidateValue
            }
            if height[end] > height[start] {
                start += 1
            }
            else {
                end -= 1
            }
        }
        return result
    }
}