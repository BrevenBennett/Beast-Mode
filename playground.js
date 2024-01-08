const nums = [1, 2, 4, 9, 12];
const target = 9;

const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1; // 4

  while (l < r) {
    const middle = Math.floor((l + r) / 2); // 2

    if (nums[middle] < target) { // if 4 < 9
      l = middle + 1; // l = 3
    } else if (nums[middle] > target) {
      r = middle - 1;
    } else {
      return middle;
    }
  }
};

console.log(binarySearch(nums, target));
