#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    vector<int> intersect(vector<int> &nums1, vector<int> &nums2)
    {
        // 排序之后用双指针
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        int length1 = nums1.size(),
            length2 = nums2.size();
        vector<int> intersection;
        // 双指针
        int numsPoint1 = 0, numsPoint2 = 0;
        while (numsPoint1 < length1 && numsPoint2 < length2)
        {
            if (nums1[numsPoint1] < nums2[numsPoint2])
            {
                numsPoint1++;
            }
            else if (nums1[numsPoint1] > nums2[numsPoint2])
            {
                numsPoint2++;
            }
            else
            {
                intersection.push_back(nums1[numsPoint1]);
                numsPoint1++;
                numsPoint2++;
            }
        }
        return intersection;
    }
};