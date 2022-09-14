// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


const intersect2 = function(nums1, nums2) {
	// sort the arrays
    nums1.sort((a,b) => a-b), nums2.sort((a,b) => a-b);
	
    let i = 0,
        j = 0,
        result = [];
    
    while(i<nums1.length && j<nums2.length) {
        if(nums1[i] < nums2[j]){
            i++;
        } else if(nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    
    return result;
};

console.log(intersect2([1,2],[1,1]))

var intersect3 = function(nums1, nums2){
  let ans=[];
  let longArr=[];
  let shortArr=[];
  if(nums1.length>nums2.length){
      longArr=nums1;
      shortArr=nums2;
  }else{
      shortArr=nums1;
      longArr=nums2;
  }
  shortArr.forEach(e => {
      if(longArr.indexOf(e)!==-1){
          ans.push(e);
          longArr.splice(longArr.indexOf(e),1)
      }
  });
  return ans;

}

var intersect4 = function(nums1, nums2) {
  obj = {};
  result = [];
  for(let i of nums1){
      obj[i] = obj[i] ? obj[i]+1 : 1
  }
  for(let i of nums2){
      if(obj[i]){
          obj[i]--
          result.push(i)
      }
  }
  return result
};