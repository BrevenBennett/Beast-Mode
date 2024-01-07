/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 *
 * Note: You can not use the division operator
 *
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */

const productExceptSelf = (nums) => {
  const results = [];

  results[0] = 1;
  // creating the left products inside results array
  for (let i = 1; i < nums.length; ++i) {
    results[i] = results[i - 1] * nums[i - 1];
  }
  // Right product gets bigger as we move from right to left. It's the product of all the numbers to the right of the current number we are on in the loop
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    results[i] = results[i] * rightProduct;
    // increasing right product as we move through given array
    rightProduct *= nums[i];
  }

  return results;
};

module.exports = productExceptSelf;
