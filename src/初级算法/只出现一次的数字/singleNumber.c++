#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    int singleNumber(vector<int> &nums)
    {
        int singleNumber = 0;
        for (auto e : nums)
        {
            singleNumber ^= e;
        }
        return singleNumber;
    }
};