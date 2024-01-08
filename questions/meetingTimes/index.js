/** Meeting Times **
 *
 * Given an array of meeting times, determine if a person can
 * attend all meetings.
 *
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 *
 */

const meetingTimes = (times) => {
  // sorting the given array in ascending order of the subarray's start times (0th index) 
  times.sort((a, b) => a[0] - b[0]);
  // looping through array, need to start at one because we are comparing current index to previous index
  for (let i = 1; i < times.length; ++i) {
    // looking at the current subarray's first index
    const currentStartTime = times[i][0];
    // looking at the previous subarray's last index
    const prevEndTime = times[i - 1][1];
    // if the current subarray's start time is less than the previous subarray's end time, then the times are overlapping. The person cannot attend all the meetings, return false
    if (currentStartTime < prevEndTime) {
      return false;
    }
  }

  return true;
};

module.exports = meetingTimes;
