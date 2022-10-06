/**
 * 
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。
 */

/**
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 */

/**
 * 输入：prices = [1,2,3,4,5]
 * 输出：4
 */



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 贪心算法 只要每一次后面的比前面的大，就卖出
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i])
            maxProfit += prices[i + 1] - prices[i];
    }
    return maxProfit;
};