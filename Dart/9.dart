class Solution {
  bool isPalindrome(int x) {
    int firstX = x;
    if(x < 0){
      return false;
    }
    int res = 0;
    while(x != 0){
      res = res * 10 + x % 10;
      x = x ~/ 10;  
    }
    return firstX == res;
  }
}