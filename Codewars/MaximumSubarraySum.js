// 문제
// 정수로 이루어진 배열 arr에서 연속되는 요소들의 최대합을 구해라. 빈 배열이라면 0을 반환해야 한다.

// For example:
//   maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

const maxSequence = function (arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (maxSum < arr.slice(i, j).reduce((a, b) => a + b, 0)) {
        maxSum = arr.slice(i, j).reduce((a, b) => a + b, 0);
      }
    }
  }
  return maxSum;
};
