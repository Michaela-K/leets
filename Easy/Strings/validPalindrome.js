// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = function (s) {
  let original =s.toLowerCase().replace(/[^a-z0-9]/gi,'') //no spaces, commas, colons
  let stringReverse = s.replace(/[^a-z0-9]/gi,'').split("").reverse().join("").toLowerCase();
  return original === stringReverse;
};


var isPalindrome2 = function(s) {
  let string = s.replace(/\W|_/g, '').toLowerCase()
  return string === string.split("").reverse().join("");
};