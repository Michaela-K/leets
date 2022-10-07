//Given a string s, find the first non-repeating character in it and return its index. 
//If it does not exist, return -1

//Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

const firstUniqChar = function(s) {
  //loop over string
  for(let i=0;i<s.length;i++){
    //take first element(make it a variable)
    let el = s[i]
    console.log("el",el, s.indexOf(el, i+1))
    console.log("i",i)
    console.log("index of el",s.indexOf(el))  //index of letter
    console.log("index of el +",s.indexOf(el, i+1)) 
    //compare first element with all the rest
    if(s.indexOf(el)==i && s.indexOf(el,i+1)==-1){
      return i
    }
    return -1
  }
  //if no equal thats the answer
  //if equal, then take next index as element
};

console.log(firstUniqChar("leetcode"))