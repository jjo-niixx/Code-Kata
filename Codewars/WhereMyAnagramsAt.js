// 문제
// word의 문자와 똑같은 문자로 구성된 words의 요소를 찾아라. 이때 문자의 종류는 똑같아야 하지만 순서는 달라도 된다.

// For example:
//   anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//   anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//   anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  let result = [];
  const sortedWord = word.split("").sort().join("");
  for (let i = 0; i < words.length; i++) {
    let sortedWords = words[i].split("").sort().join("");
    if (sortedWord === sortedWords) {
      result.push(words[i]);
    }
  }
  return result;
}
