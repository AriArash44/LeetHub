class Solution {
    fun longestValidParentheses(s: String): Int {
        val stack = mutableListOf(-1)
        var longestLength = 0
        for (i in s.indices) {
            val ch = s[i]
            if (ch == ')') {
                stack.removeAt(stack.size - 1)
                if (stack.isEmpty()) {
                    stack.add(i)
                } else {
                    longestLength = maxOf(longestLength, i - stack.last())
                }
            } else {
                stack.add(i)
            }
        }
        return longestLength
    }
}