// 문제
// 로마 숫자를 정수로 변환 해야한다. 여기서 각 자리 문자의 변환값이 내림차순이라면 +, 오름차순이라면 -
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// For example:
//  solution('XXI'); // should return 21
//  solution('IV'); // should return 4

function solution(roman) {
  const value = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const splitted = roman.split("");
  let result = 0;
  for (let i = 0; i < splitted.length; i++) {
    if (value[splitted[i]] < value[splitted[i + 1]]) {
      result -= value[splitted[i]];
    } else result += value[splitted[i]];
  }
  return result;
}
