/** Flatten Array **
 *
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array.
 *
 *
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 *
 */

const flatten = (nums) => {
  const results = [];
  // need this helper function so we don't create a new, empty results array every time we recursively call flatten
  const flattenHelper = (nums) => {
    for (elem of nums) {
      // if the current element is an array, basically start the flatten helper function over. On the second run through the elements of the subarray will then be pushed onto the results
      if (Array.isArray(elem)) {
        flattenHelper(elem);
      } else {
        results.push(elem);
      }
    }
  };

  flattenHelper(nums);

  return results;
};

module.exports = flatten;
