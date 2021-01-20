// 문제
// 인자가 소수이면 true, 소수가 아니면 false를 리턴하라.

// For example:
//   is_prime(1)  /* false */
//   is_prime(2)  /* true  */
//   is_prime(-1) /* false */

function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num % 2 === 0) {
    if (num === 2) return true;
    else return false;
  } else if (num % 2 === 1) {
    const squareRootNum = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= squareRootNum; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}
