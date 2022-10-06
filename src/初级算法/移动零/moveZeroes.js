/**
 * @param url：https://leetcode.cn/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 类似双指针的作用
    let i = 0, j = 0;
    for (; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
        if (i == nums.length - 1) {
            // fill(value，start,end) 默认end是length -1;
            nums.fill(0, j)
        }
    }
};