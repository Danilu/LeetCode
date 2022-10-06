/**
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false
 */

/**
 * 输入：nums = [1,2,3,1]
 * 输出：true
 */

/**
 * 输入：nums = [1,2,3,4]
 * 输出：false
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // 先进行排序，这样重复的元素就必然相邻
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1])
            return true;
    }
    return false;
};