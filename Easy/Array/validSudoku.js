// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 
//When dealing with checking for duplicates, we use a Hash Set.
//Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. 

//How do we iterate using i, j, and 3(because its 3x3)?
// We use / and % to help!

// Because we only want to start vertical traversal when horizontal traversal is done. 

// Use / for vertical traversal because
// Math.floor(0 / 3) = 0
// Math.floor(1 / 3) = 0
// Math.floor(2 / 3) = 0

// Use % for horizontal traversal beause 
// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2

//floor(i/3)*3 is going to be either 0, 3, or 6. So basically using i we can get the top row of each box, 
// but we need to get the other 2 rows as well. When j is 0~2 that's the first row, 3~5 is the second row, 
// 6~8 is the third row. By dividing the current j by 3 and flooring it we get either 0, 1, or 2 which we 
// can add onto the current floor(i/3)*3 to get the 1st, 2nd, 3rd row of each box. Similar logic can be applied for columns.

const isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();
        
        for (let j = 0; j < board.length; j++) {
          let _row = board[i][j]; //row number or item
          let _col = board[j][i]; //column number or item
          let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)] //     / for vertical traversal and  % for horizontal
          // eg board[1][1]
          // console.log("_box", _box)
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row); //if there is a repeat number it will not add it to the row set a second time
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      console.log("col", col)
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};

console.log(isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
))


var isValidSudoku2 = function(board) {
  const cols = {}
  const rows = {}
  const squares = {}
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const grid = `${Math.floor(i / 3)}${Math.floor(j/3)}`
          const boardValue = board[i][j];
          if ("." === boardValue) { 
              continue;
          }
          if (!rows[i]) {
              rows[i] = new Set();
          }
          if (!cols[j]) { 
              cols[j] = new Set();
          }
          if (!squares[grid]) {
              squares[grid] = new Set();
          }
          if (rows[i].has(boardValue) || cols[j].has(boardValue) || squares[grid].has(boardValue)) { 
              return false;
          }
          cols[j].add(boardValue);
          rows[i].add(boardValue);
          squares[grid].add(boardValue);
      }
  }
  return true;
};