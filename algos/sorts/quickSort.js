/* 
  Params: numbers, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

// const numbers1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for numbers1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
// const numbers2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// const numbers3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// const numbers4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
function partition(numbers, leftIdx = 0, rightIdx = numbers.length - 1) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const pivotValue = numbers[midIdx];
    const tempPivotIdx = rightIdx;

    // Swap the pivot to the end of the section being partitioned so its
    // position can be kept track of, then move it last to its final position.
    [numbers[midIdx], numbers[tempPivotIdx]] = [
        numbers[tempPivotIdx],
        numbers[midIdx],
    ];

    // Skip over the pivot that was moved to the end so it stays there for now.
    rightIdx = tempPivotIdx - 1;

    // Look for a num on the left and on the right that both need to be moved to
    // the other side so one swap can move both of them to the correct side.
    while (true) {
        // Move leftIdx until we find a num that is out of place.
        while (numbers[leftIdx] < pivotValue) {
            leftIdx += 1;
        }

        // Move rightIdx until we find a num that is out of place.
        while (numbers[rightIdx] > pivotValue) {
            rightIdx -= 1;
        }

        // All numbers have been iterated over, partitioning is complete.
        if (leftIdx >= rightIdx) {
            // Swap the pivot to it's final location.
            [numbers[tempPivotIdx], numbers[leftIdx]] = [
                numbers[leftIdx],
                numbers[tempPivotIdx],
            ];
            return leftIdx;
        }

        // Swap the two out of place numbers so they will both be on the correct side.
        [numbers[leftIdx], numbers[rightIdx]] = [
            numbers[rightIdx],
            numbers[leftIdx],
        ];

        // After swapping, we're done with this pair, move on.
        leftIdx += 1;
        rightIdx -= 1;
    }
}


/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array
  in-place.
  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the
      last idx.
  - later these params will be used to specify a sub section of the array to
      partition.
  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/


const numbers1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const numbers2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const numbers3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const numbers4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(numbers = [], left = 0, right = numbers.length - 1) { }