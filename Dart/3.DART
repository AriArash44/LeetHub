class Solution {
  int lengthOfLongestSubstring(String s) {
    int start = 0, res = 0;
    Map<String, int> lastOccurance = {};
    for (int i = 0; i < s.length; i++) {
      if ((lastOccurance[s[i]] ?? -1) >= start) {
        start = lastOccurance[s[i]]! + 1;
      } 
      if (i - start + 1 > res) {
        res = i - start + 1;
      }
      lastOccurance[s[i]] = i;
    }
    return res;
  }
}