// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

/**
 * 输入：nums = [1,2,3,4,5,6,7], k = 3
 * 输出：[5,6,7,1,2,3,4]
 */

/**
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 */
#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        int n = nums.size();
        int tempArray[n];
        for (int i = 0; i < n; i++)
        {
            tempArray[(i + k) % n] = nums[i];
        }
        for (int i = 0; i < n; ++i)
        {
            nums[i] = tempArray[i];
        }
    }
};