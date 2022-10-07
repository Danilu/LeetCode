/**
 * @param url:https://leetcode.cn/problems/valid-sudoku/
 */

 var isValidSudoku = function (board) {
    // 回溯
    // 行 列 3*3 分别判重
    let rows = {};
    let columns = {};
    let boxes = {};
    // 对数独遍历
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // 有效数字
            let num = board[i][j];
            if (num != '.') {
                let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
                if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) {//重复检测
                    return false;
                }
                rows[i + '-' + num] = true;
                columns[j + '-' + num] = true;
                boxes[boxIndex + '-' + num] = true;
            }
        }
    }
    return true;
}