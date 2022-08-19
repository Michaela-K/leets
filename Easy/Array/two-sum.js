// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = function(nums, target) {
  let ans = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
          ans.push(i, j)
      }
    }
  }
  return ans;
};


console.log(twoSum([2,7,11,15], 9))


//OTHER WAY
var twoSum2 = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const findNum = target - nums[i];
    console.log("loop findNum",findNum, i)
    console.log("nums[i]",nums[i], i)

    if (findNum in obj) {  //in is used to check if a property exists in an object https://www.javascripttutorial.net/object/javascript-check-if-property-exists/#:~:text=%3A%20JavaScript%20(javascript)-,Use%20the%20in%20operator,the%20object%2C%20it%20returns%20false%20.&text=Unlike%20the%20hasOwnProperty()%20method,inherited%20properties%20of%20the%20object.
      //if 2 is in the object
      console.log("obj", obj)
      console.log("in", findNum)
      console.log(obj[findNum], i)
      // if we dont do both of these below the object wont be created
      return [obj[findNum], i];   //here it returns an array of [1,2]
    } else {
      obj[nums[i]] = i;//here it inserts into the object "2": 1
    }
  }
};

console.log(twoSum2([3,2,4], 6))

//THIRD WAY
var twoSum3 = function(nums, target) {
  let obj={}
  for(let i=0;i<=nums.length;i++){
      if(obj.hasOwnProperty(nums[i])){       
          return [obj[nums[i]],i]
      } else{
          obj[target-nums[i]]=i
      }  
  } 
};