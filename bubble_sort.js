const bubble_sort = (arr, n) => {
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
};

const print_arr = (arr) => {
  for (let i = 0; i < n; i++) {
    console.log(`${arr[i]} `);
  }
};

const arr = [64, 34, 25, 12, 22, 11, 90];
const n = arr.length;
bubble_sort(arr, n);
console.log('Sorted array: ');
print_arr(arr);

// Time Complexity: O(n^2)
// Space Complexity: O(1)