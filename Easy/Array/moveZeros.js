// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


const moveZeroes = function(nums) {
  for(let i=nums.length;i--;){
    if(nums[i] === 0){
      let num = nums[i]
      nums.splice(i, 1)
      nums.push(num)
    }
    console.log(nums)
  }
    
};

console.log(moveZeroes([0,1,0]))

const moveZeroes2 = function(nums) {
  const len = nums.length
  let count = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) nums[count++] = nums[i]
  }
  for (let i = count; i < len; i++) {
    nums[count++] = 0
  }
  return count
}