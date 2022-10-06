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
    const map = {};
    const res = [];
    for (const num1 of nums1) { // 记录nums1各个数字的出现次数
        if (map[num1]) {
            map[num1]++;
        } else {
            map[num1] = 1;
        }
    }
    for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
        const val = map[num2];
        if (val > 0) {            // 有出现过
            res.push(num2);         // 推入res数组
            map[num2]--;            // 匹配掉一个，就减一个
        }
    }
    return res;
};