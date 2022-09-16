// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


var reverse = function(x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2**31) return 0;
  return absReversed * Math.sign(x);
};

const reverse2 = function(s) {
  let strtI = 0, endI = s.length- 1;
  
  while(strtI <= endI){
      [s[strtI], s[endI]] = [s[endI], s[strtI]]
      strtI++
      endI--
  }
  return s
};