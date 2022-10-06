/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */


/**
 * 当提莫攻击艾希，艾希的中毒状态正好持续 duration 秒。

正式地讲，提莫在 t 发起发起攻击意味着艾希在时间区间 [t, t + duration - 1]（含 t 和 t + duration - 1）处于中毒状态。如果提莫在中毒影响结束 前 再次攻击，中毒状态计时器将会 重置 ，在新的攻击之后，中毒影响将会在 duration 秒后结束。

给你一个 非递减 的整数数组 timeSeries ，其中 timeSeries[i] 表示提莫在 timeSeries[i] 秒时对艾希发起攻击，以及一个表示中毒持续时间的整数 duration 。

返回艾希处于中毒状态的 总 秒数。
 */


/**
 * 输入：timeSeries = [1,4], duration = 2
 * 输出：4
 */
var findPoisonedDuration = function (timeSeries, duration) {
    // 总中毒时间
    let totalTime = 0;
    // 当前是否是在中毒状态，即上一次攻击的结束时间
    let lastEndTime = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (timeSeries[i] > lastEndTime) {
            // 受到攻击的时间大于上一次攻击结束的时间
            totalTime += duration;
        } else {
            // 受到攻击的时候 还处于中毒状态
            totalTime += timeSeries[i] + duration - lastEndTime;
        }
        lastEndTime = timeSeries[i] + duration;
    }
    return totalTime;
};