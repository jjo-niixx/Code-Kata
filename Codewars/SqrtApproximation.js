// 문제
// 인자의 제곱근이 정수라면 그 정수를 리턴하고, 정수가 아니라면 그 범위를 배열로 나타내라.

// For example:
sqrtApproximation(4); // returns 2
sqrtApproximation(5); // returns [2,3]

function sqrtApproximation(number) {
  for (let i = 0; i <= number; i++) {
    if (i * i === number) {
      return i;
    } else if (i * i < number && number < (i + 1) * (i + 1)) {
      return [i, i + 1];
    }
  }
}
