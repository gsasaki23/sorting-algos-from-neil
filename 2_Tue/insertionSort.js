// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140

/* 
  Array: Insertion Sort
*/

/* 
  - visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

  - see other visualizion linked in README


  - efficient for small data sets
  - constant memory / space O(1)

  Time Complexity
    - Best: n when array is already sorted
    - Average: O(n^2)
    - Worst: O(n^2) when the array is reverse sorted

  - this sort splits the array into two portions (conceptually, not literally)
  - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted

  // can shift or swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position availale to shift items)
  4. if item to the left of current is greater than current item, shift the left item to the right
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat

  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

// src=https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
// sample arrs
var arrRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSortSwap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let targetIdx = i; // to avoid altering i directly
    let comparisonIdx = i - 1; // compare to the left

    while (comparisonIdx >= 0 && arr[comparisonIdx] > arr[targetIdx]) {
      // destructure swap notation
      [arr[comparisonIdx], arr[targetIdx]] = [
        arr[targetIdx],
        arr[comparisonIdx],
      ];

      // target swapped with comparison so target's new location is comparison's location
      targetIdx = comparisonIdx;
      comparisonIdx--;
    }
  }
  return arr;
}

function insertionSortShift(arr) {
  for (var i = 0; i < arr.length; i++) {
    // save the current 'target' so this space is available to use for shifting
    var temp = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      // shift to the right because it's greater than the item we are going to insert
      arr[j + 1] = arr[j];
      j--;
    }
    // shifting complete, insert position located
    arr[j + 1] = temp;
  }
  return arr;
}

// console.log(insertionSortShift(arrRandom.slice()).join(", "));
