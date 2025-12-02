/* Iterative */
const binary_search = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

const arr = [2, 3, 4, 10, 40];
const x = 10;
const result = binary_search(arr, x);
result === -1
  ? console.log('Element is not present in the array')
  : console.log(`Element is present at index ${result}`);

// Time Complexity: O(logn)
// Space Complexity: O(1)


/* Recursive */
const binary_search = (arr, low, high, x) => {
  if (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binary_search(arr, low, mid - 1, x);
    } else {
      return binary_search(arr, mid + 1, high, x);
    }
  }

  return -1;
};

const arr = [2, 3, 4, 10, 40];
const x = 10;
const n = arr.length;
const result = binary_search(arr, 0, n - 1, x);
result === -1
  ? console.log('Element is not present in the array')
  : console.log(`Element is present at index ${result}`);

// Time Complexity: O(logn)
// Space Complexity: O(logn)
