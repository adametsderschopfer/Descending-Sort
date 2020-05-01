const SortedArray = [2, 1, 12, 4, 5, 6, 7, 8, 9, 11, 10, 3, 13, 14, 15];

const descendingSort = (arr) => {
  for (let i = 0, endI = arr.length + 1; i < endI; i++) {
    let point = false;
    for (let j = 0, endJ = endI + i; j < endJ; j++) {
      if (arr[j] > arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        point = true;
      }
    }
    if (!point) break;
  }
  return arr;
};

descendingSort(SortedArray);
