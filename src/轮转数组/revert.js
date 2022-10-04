// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

/**
 * 输入：nums = [1,2,3,4,5,6,7], k = 3
 * 输出：[5,6,7,1,2,3,4]
 */

/**
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // js没有指针，无法用双指针进行操作
    // 可以看出 最后位置是（当前位置 + k)mod length
    // 构造一个与nums长度相同的数组
    const n = nums.length;
    let tempArray = new Array(n);
    for (let i = 0; i < n; i++) {
        tempArray[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = tempArray[i];
    }
};
