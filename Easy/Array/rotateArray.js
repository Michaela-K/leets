// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotate = function(nums, k) {
  const start = nums.length - (k % nums.length); //7 - 3
  let spliced = nums.splice(start, k); //[5,6,7]

  nums.unshift(...spliced);
  return nums
};

const rotate2 = function(nums, k) {
  let j = nums.length - k % nums.length;
  let arr = [...nums];
  for(let i=0; i<nums.length; i++) {
      if(j === nums.length) {
          j = 0;
      }
      nums[i] = arr[j];
      j++;
  }
  return nums;
};


console.log(rotate([-1, -100, 3, 99], 2))





