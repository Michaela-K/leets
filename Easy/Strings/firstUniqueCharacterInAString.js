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
      return i  //return the index
    }
    return -1 //doesnt exist
  }
  //if no equal thats the answer
  //if equal, then take next index as element
};

console.log(firstUniqChar("leetcode"))

//NOTE;
//indexOf(searchElement)
// indexOf(searchElement, fromIndex)

// fromIndex
// The index to start the search at. 
// If the provided index is 0 then the whole array will be searched
// If the index is greater than or equal to
// the arrays length, -1 is returned, which means the array willnot be searched.
// RETURN VALUE: the first index of th element in the array; -1 if not found



//OTHER
var firstUniqChar2 = function(s) {
  for(let i of s){
     if(s.lastIndexOf(i) == s.indexOf(i)){
         return s.indexOf(i);
     }
 }
 return -1;
};