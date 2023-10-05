const nums = [2, 3, 4, 5, 6, 7, 45];
const target = 7;

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
 
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert(nums, target));
