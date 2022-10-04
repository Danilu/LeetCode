/**
 * @param url:https://leetcode.cn/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 使用Hash表，统计出nums1中每个元素对应出现的次数
    // 遍历nums2，看是否在hash表中出现，出现的话push进结果数组，频率-1

    // 构造{元素值：出现次数}这种结构
    let hash = new Map();
    let res = [];
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    for (let i = 0; i < nums1.length; i++) {
        if (hash.has(nums1[i])) {
            hash.set(nums1[i], hash.get(nums1[i]) + 1);
        } else {
            hash.has(nums1[i], 1);
        }
    }
    // 遍历nums2
    for (let i = 0; i < nums2.length; i++) {
        let temp = nums2[i];
        let hasKey = hash.has(temp);
        if (temp) {
            res.push(temp);
            if (hasKey > 1) {
                hash.set(temp, hasKey - 1)
            } else {
                hash.delete(temp);
            }
        }

    }
    return res;
};