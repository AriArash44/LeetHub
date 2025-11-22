/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let output = -1;
    for (let i = 0; i < haystack.length; i++) {
        if(haystack.slice(i, i + needle.length) === needle) {
            output = i;
            break;
        }
    }
    return output;
};