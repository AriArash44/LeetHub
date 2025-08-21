class Solution {
  int myAtoi(String s) {
    s = s.trim();
    if (s.isEmpty) return 0;
    int i = 0;
    bool isNegative = false;
    if (s[i] == '-' || s[i] == '+') {
      isNegative = s[i] == '-';
      i++;
    }
    int result = 0;
    while (i < s.length && s.codeUnitAt(i) >= 48 && s.codeUnitAt(i) <= 57) {
      int digit = s.codeUnitAt(i) - 48;
      if (result > (1 << 31) ~/ 10 || (result == (1 << 31) ~/ 10 && digit > (isNegative ? 8 : 7))) {
        return isNegative ? -2147483648 : 2147483647;
      }
      result = result * 10 + digit;
      i++;
    }
    return isNegative ? -result : result;
  }
}
