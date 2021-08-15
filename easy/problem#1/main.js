let holder = [];
function twoSum(nums, target) {
  if (-109 <= target && target <= 109) {
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
    alert("Please set a target between -109 and 109");
  }
}
const x = twoSum([9, -10, -109], 100);
console.log(x);
