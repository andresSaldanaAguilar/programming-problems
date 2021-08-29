let ex = [1, 1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 15, 20, 300, 301];

const binarySearch = (arr, n) => {
  let low = 0;
  let hi = arr.length - 1;
  while (low <= hi) {
    const mid = Math.floor((hi + low) / 2);
    if (n === arr[mid]) {
      return true;
    } else if (n > arr[mid]) {
      low = mid + 1;
    } else if (n < arr[mid]) {
      hi = mid - 1;
    }
  }
  return false;
};

console.log(binarySearch(ex, 300));
