// 문제
// A인자는 정수로 이루어진 배열인데, 1가지의 숫자만 홀수 갯수로 등장한다. 그 수가 무엇인지 찾아라.

function findOdd(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    if (result.includes(A[i])) result.splice(result.indexOf(A[i]), 1);
    else {
      result.push(A[i]);
    }
  }
  return result[0];
}
