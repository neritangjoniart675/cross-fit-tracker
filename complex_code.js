/* filename: complex_code.js */
/* This code implements a complex sorting algorithm called QuickSort */

function quickSort(arr, left, right) {
  var len = arr.length,
      pivot,
      partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var arr = [5, 2, 6, 3, 1, 4];
var sortedArr = quickSort(arr, 0, arr.length - 1);
console.log(sortedArr);