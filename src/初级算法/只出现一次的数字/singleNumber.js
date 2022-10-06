/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param url:https://leetcode.cn/problems/single-number/
 */
 var singleNumber = function (nums) {
    // 先进行排序
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i+=2) {
        if (nums[i] !== nums[i + 1]){
           return nums[i]
        }
    }
};