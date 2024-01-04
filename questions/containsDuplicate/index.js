/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

const containsDuplicate = (nums) => {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
      if (map.has(nums[i])) {
        return true;
      }
      map.set(nums[i])
    }
    return false;

//   let sortedArr = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArr.length - 1; ++i) {
//     if (nums[i] === nums[i + 1]) {
//         return true
//     }
//   }
//   return false;

  //   for (let i = 0; i < nums.length - 1; ++i) {
  //     for (let j = i + 1; j < nums.length; ++j) {
  //       if (nums[i] === nums[j]) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
};

module.exports = containsDuplicate;
