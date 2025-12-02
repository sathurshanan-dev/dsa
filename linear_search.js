const search = (arr, x) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  
  return -1;
};

const arr = [2, 3, 4, 10, 30];
const x = 10;
const result = search(arr, x);
result === -1
  ? console.log('Element is not present in the array')
  : console.log(`Element is present at index ${result}`);

// Time Complexity: O(n)
// Space Complexity: O(1)
