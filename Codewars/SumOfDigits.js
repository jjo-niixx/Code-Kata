// 문제
// n이라는 인자의 각 자릿수의 합이 한자리가 나오도록 해라.

// For example:
//   16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//   132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//   493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  while (n >= 10) {
    n = `${n}`
      .split("")
      .map((el) => el * 1)
      .reduce((a, b) => a + b, 0);
  }
  return n;
}
