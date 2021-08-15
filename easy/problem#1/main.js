let holder = [];
function twoSum(nums, target) {
  if (-109 <= target && target <= 109) {
    if (2 <= nums.length && nums.length <= 104) {
      for (let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i];
        if (nums.includes(secondNum) && secondNum !== nums[i]) {
          holder.push(i, nums.indexOf(secondNum));
          return holder;
        } else if (nums.includes(secondNum)) {
          holder.push(i, nums.indexOf(secondNum) + 1);
          return holder;
        } else {
          if (!nums.includes(secondNum)) {
            return "Target is not found";
          }
        }
      }
    } else {
      alert("Array length must be in this range : 2 <= length <= 104");
    }
  } else {
    alert("Please set a target between -109 and 109");
  }
}
const x = twoSum([9,100], 109);
console.log(x);
