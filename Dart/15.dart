class Solution {
  List<List<int>> threeSum(List<int> nums) {
    List<List<int>> res = [];
    final seen = <String>{};
    Map<int, int> twoSum = {};
    for (int i = 0; i < nums.length; i++) {
      for (int j = 0; j < nums.length; j++) {
        if (i == j) {
          break;
        }
        if (twoSum.containsKey(nums[j])) {
          var triplet = [nums[i], nums[j], twoSum[nums[j]]!];
          triplet.sort();
          var key = triplet.join(',');
          if (seen.add(key)) {
            res.add(triplet);
          }
        } else {
          twoSum[-1 * nums[i] - nums[j]] = nums[j];
        }
      }
      twoSum = {};
    }
    return res;
  }
}
