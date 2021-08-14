var isPalindrome = function (x) {
  let str = x.toString();
  let arr1 = str.split("");
  let arr2 = [...arr1].reverse();
  let isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
  if (isEqual) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(121));
