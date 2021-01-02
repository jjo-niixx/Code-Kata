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
