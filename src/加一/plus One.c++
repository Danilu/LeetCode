#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    vector<int> plusOne(vector<int> &digits)
    {
        int end = digits.size() - 1; //从后往前遍历，记录个位位置
        ++digits[end];               //个位+1
        for (int i = end; i >= 1; --i)
        {
            int added = (digits[i] >= 10) ? 1 : 0; //该位如果大于10则需要进位
            if (!added)
                return digits; //如果一个位上不需要向下一位进位，则直接返回
            digits[i] -= 10;   //上一行的逻辑把added=0的情况短路了，所以不需要根据added的取值对当前位和下一位进行调整
            digits[i - 1] = ++digits[i - 1];
        }
        if (digits[0] == 10)
        {
            digits[0] = 0;
            digits.insert(digits.begin(), 1);
        } //处理最高一位为9且产生进位的特殊情况
        return digits;
    }
};