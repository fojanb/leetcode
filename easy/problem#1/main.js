let holder = [];
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let secondNum = target - nums[i];
    if (nums.includes(secondNum) && secondNum !== nums[i]) {
      holder.push(i, nums.indexOf(secondNum));
      return holder;
    } else if (nums.includes(secondNum)) {
      holder.push(i, nums.indexOf(secondNum)+1);
      return holder;
    }
  }
}
const x = twoSum([2,0,11,15,7], 9);
console.log(x);
