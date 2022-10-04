/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"
 */

/**
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

/**
 * @param {string} s
 * @return {string}
 */

// 正则
var replaceSpace = function (s) {
    s = s.replace(new RegExp(" ", "gm"),'%20');
    return s;
};