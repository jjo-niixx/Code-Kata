// 문제
// 인자의 길이가 짝수라면 가운데 2개의 문자열을 반환하고, 홀수라면 가운데 1개의 문자열을 반환해라.

// For example:
// getMiddle("test") should return "es"
// getMiddle("testing") should return "t"
// getMiddle("middle") should return "dd"
// getMiddle("A") should return "A"

function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}
