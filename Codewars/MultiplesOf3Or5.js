// 문제
// number가 인자로 주어질 때, number 미만의 수 중에서 3과 5의 배수의 합을 구하여라. 이때 각 배수는 딱 한 번씩만 세어진다. number가 음수라면 0을 반환한다.

// For example:
//   solution (10) // returns 23

function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    i % 3 === 0 || i % 5 == 0 ? (sum += i) : sum;
  }
  return sum;
}
