class Solution(object):
    def longestPalindrome(self, s):
        strLength = len(s)
        self.table = [[i == j for j in range(strLength)] for i in range(strLength)]
        for i in range(1, strLength):
            for j in range(strLength - i):
                if i == 1:
                    self.table[j][j + i] = s[j] == s[j + i]
                else: 
                    self.table[j][j + i] = s[j] == s[j + i] and self.table[j + 1][j + i - 1]
        for i in range(strLength, 0, -1):
            for j in range(strLength - i + 1):
                if(self.table[j][j + i - 1]):
                    return s[j: j + i]