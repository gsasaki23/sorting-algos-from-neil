/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140

  Array: Merge Sort

  visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case: O(n log(n))
    - Average case: O(n log(n))
    - Worst case: O(n log(n))

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create merge sort function to sort the provided array
      - split the array into half and recursively merge the halves
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array

  useful methods

  - arr.concat(array2, array3, ..., arrayX)
    - combines array arg(s) with the array that concat is called on
    - returns new arr w/o mutating originals

  - arr.slice([begin[, end]])
    - returns a copy of the specified portion of the array
    - end is exclusive
      - if omitted, slices from provided 'begin' to end of array

*/

// src=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// sorts two already separately sorted arrays
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  // arrays might be different lengths, if any elems are remaining, concat them
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// Split the array into halves and merge them recursively
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.log(merge([1, 4, 6, 9], [1, 2, 3, 5, 7]));
