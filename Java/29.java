class Solution {
    public int divide(int dividend, int divisor) {
        boolean dividendIsPos = dividend > 0;
        boolean divisorIsPos = divisor > 0;
        dividend = dividendIsPos ? -dividend : dividend;
        divisor = divisorIsPos ? -divisor : divisor;
        int quotient = 0;
        if (divisor == -1) {
            quotient = dividend;
        } else {
            for (int i = 0; i >= dividend - divisor; i += divisor) {
                quotient -= 1;
            }
        }
        if (dividendIsPos == divisorIsPos) {
            if (quotient == Integer.MIN_VALUE) {
                quotient = Integer.MAX_VALUE;
            }
            else {
                quotient = -quotient;
            }
        }
        return quotient;
    }
}