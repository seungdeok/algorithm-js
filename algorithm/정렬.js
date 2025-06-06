/**
 * 버블정렬
 * 시간복잡도: O(n^2)
 * 각 요소를 인접한 요소와 비교하여 정렬하는 알고리즘
 */

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
// console.log("bubbleSort", bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]

/**
 * 선택 정렬
 * 시간복잡도 : O(n^2)
 * 각 단계에서 가장 작은 요소를 찾아서 정렬된 부분과 교환하는 알고리즘
 */

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
  }

  return arr;
}

// console.log("selectionSort", selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]

/**
 * 삽입 정렬
 * "정렬된 부분"과 "정렬되지 않은 부분"으로 나눔
 * 시간복잡도: O(n^2)
 * 각 요소를 정렬된 부분에 적절한 위치에 삽입하는 알고리즘
 */

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }

  return arr;
}

// console.log("insertionSort", insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]

/**
 * 병합 정렬
 * 리스트를 반으로 나눈 뒤 각각을 재귀적으로 정렬하고, 정렬된 두 개의 리스트를 합쳐서 정렬된 하나의 리스트를 만드는 알고리즘
 * 분할 > 정복 > 결합
 * 시간 복잡도: O(n log n)
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const arr = [];

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      arr.push(right[j]);
      j++;
    } else {
      arr.push(left[i]);
      i++;
    }
  }

  arr.push(...left.slice(i));
  arr.push(...right.slice(j));

  return arr;
}

// console.log("mergeSort", mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]

/**
 * 퀵 정렬
 * 리스트에서 피벗을 선택하고, 피벗보다 작은 요소는 왼쪽, 큰 요소는 오른쪽으로 분할하여 정렬하는 알고리즘
 * 시간 복잡도: 평균 O(n log n), 최악 O(n^2)
 * 재귀적으로 구현되며, 분할 정복 알고리즘의 일종
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const left = [];
  const right = [];
  const pivot = arr.at(-1);

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log("quickSort", quickSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]

/**
 * 카운팅(계수) 정렬
 * 정수의 범위가 제한된 경우에 사용하는 정렬 알고리즘
 * 시간 복잡도: O(n + k), n은 배열 크기, k는 정수의 범위
 * 각 정수의 빈도를 세고, 누적합을 계산하여 정렬된 배열을 생성
 */

function countingSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  for (let num of arr) {
    count[num]++;
  }

  const result = [];

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      for (let j = 0; j < count[i]; j++) {
        result.push(i);
      }
    }
  }
  return result;
}

// console.log(countingSort([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]
