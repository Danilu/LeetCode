/**
 * @param url:https://leetcode.cn/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 主要是要考虑进位问题
    const length = digits.length;
    for (let i = length - 1; i >= 0; i--) {
        digits[i] += 1;
        digits[i] %= 10;
        // 是否需要进位
        if (digits[i] != 0) {
            // 1. 不进位
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}