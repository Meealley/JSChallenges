const nums = [2,3,3,3,3, 4,6,3,3,3, 7, 5];
const val = 3;

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

console.log(removeElement(nums,val))

// nums.splice(3,1)
// console.log(nums.length)
// console.log(nums)
