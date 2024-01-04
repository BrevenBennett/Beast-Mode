/** Two Sum **
 *
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 *
 */

const twoSum = (nums, target) => {
  let mapDifferenceToIndex = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (mapDifferenceToIndex.has(nums[i])) {
      return [mapDifferenceToIndex.get(nums[i]), i];
    }
    let difference = target - nums[i];
    mapDifferenceToIndex.set(difference, i);
  }
};

module.exports = twoSum;
