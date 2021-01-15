// 문제
// return하는 값이 n개의 수가 피보나치 수열을 이루는 배열이 되게 하라.

// For example:
//   fibonacci(4); // should return  [0,1,1,2]
//   fibonacci(-1); // should return []

function fibonacci(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}
