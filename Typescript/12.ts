const digitTable: Record<number, string> = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

function intToRoman(num: number): string {
    let res = "";
    const digits: number[] = [];
    while (num > 0) {
        digits.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    const len = digits.length;
    for (let i = 0; i < len; i++) {
        const digit = digits[i];
        const base = Math.pow(10, len - i - 1);
        const one = digitTable[base];
        const five = digitTable[5 * base];
        const ten = digitTable[10 * base];
        switch (digit) {
            case 0:
                break;
            case 1:
            case 2:
            case 3:
                res += one.repeat(digit);
                break;
            case 4:
                res += one + five;
                break;
            case 5:
                res += five;
                break;
            case 6:
            case 7:
            case 8:
                res += five + one.repeat(digit - 5);
                break;
            case 9:
                res += one + ten;
                break;
        }
    }
    return res;
}