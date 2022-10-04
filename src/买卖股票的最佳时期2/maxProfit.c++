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

#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int maxProfit = 0;
        for (int i = 0; i < prices.size(); i++)
            maxProfit += max(0, prices[i + 1] - prices[i]);
        return maxProfit;
    }
};