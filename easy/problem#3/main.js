const rev = function (number) {
  let str = number.toString();
  let arr = str.split("");
  if (number < 0) {
    return parseInt(arr.reverse().join(""))*(-1);
  }
  else{
    return parseInt(arr.reverse().join(""));

  }
};
console.log(rev(1020));
// No need to call the function in LeetCode complier, it does all stuffs itself.