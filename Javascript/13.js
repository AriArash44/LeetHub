const digitTable = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

const subPairs = ["IV", "IX", "XL", "XC", "CD", "CM"];

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let chars = s.split("");
    return chars.reduce((acc, curr, idx) => {
        if (subPairs.includes(curr.concat(chars[idx + 1]))) {
            acc -= digitTable[curr];
        }
        else{
            acc += digitTable[curr];
        }
        return acc;
    }, 0)
};