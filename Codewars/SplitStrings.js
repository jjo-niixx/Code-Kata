// 문제
// 매개변수 str를 2문자씩 짝지어라. 이때 str가 홀수 길이라면 짝지을 때 2번째 문자는 빈칸이므로 _로 대체해라

// For example:
//   solution('abc') // should return ['ab', 'c_']
//   solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i === str.length - 1) {
      result.push(str.slice(i) + "_");
    } else {
      result.push(str.slice(i, i + 2));
    }
  }
  return result;
}
