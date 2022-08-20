// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

//linear runtime complexity  - 

 //If an algorithm’s time complexity is linear, 
 //it means that the runtime of the algorithm grows almost linearly with the input size. 
 //A typical example of this, is by looping over an array. 
 //The more elements there are in the array, the longer it takes to finish looping! 
 //Let’s say that we invoke a function on every element in the array. The function takes 5ms to execute.



// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function(nums) {
  nums.sort();
  for (var i = 0; i < nums.length; i += 2) { //skip 2
      if (nums[i] != nums[i + 1]) { // checking if eg. 0 and 1 are same
          return nums[i];
      }
  }
};

console.log(singleNumber([4,1,2,1,2]))