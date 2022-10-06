/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"
 */

/**
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

#include <iostream>
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    string replaceSpace(string s)
    {
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == ' ')
            {
                s.replace(i, 1, "%20");
                i += 2;
            }
        }
        return s;
    }
};