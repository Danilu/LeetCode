#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        // 双指针，0与非零数交换
        int length = nums.size(), left = 0, right = 0;
        while (right < length)
        {
            if (nums[right] == 0)
            {
                swap(nums[left], nums[right]);
                left++;
            }
            right++;
        }
    }
};