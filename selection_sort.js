const selection_sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
};

const print_arr = (arr) => {
  for (let val of arr) {
    console.log(val);
  }
};

const arr = [64, 25, 12, 22, 11];

console.log('Original array: ');
print_arr(arr);

selection_sort(arr);

console.log('Sorted array: ');
print_arr(arr);

// Time Complexity: O(n^2)
// Space Complexity: O(1)