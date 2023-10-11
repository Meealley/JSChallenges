const nums = [2, 2,1];

var singleNumber = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
};

console.log(singleNumber(nums))
