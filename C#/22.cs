public class Solution {
    public IList<string> GenerateParenthesis(int n) {
        List<string> result = new List<string>();
        backtrack(result, new StringBuilder(), 0, 0, n);
        return result;
    }
    private void backtrack(List<string> result, StringBuilder current, int open, int close, int max) {
        int balance = open - close;
        int remaining = 2 * max - current.Length;
        if (balance < 0 || balance > remaining || open > max || close > max) return;
        if (current.Length == 2 * max) {
            result.Add(current.ToString());
            return;
        }
        current.Append('(');
        backtrack(result, current, open + 1, close, max);
        current.Length--;
        current.Append(')');
        backtrack(result, current, open, close + 1, max);
        current.Length--;
    }
}