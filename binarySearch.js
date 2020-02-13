let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    };
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }; 
  };
  return mid;
};

console.log(binariSearch(numbers, 5))
