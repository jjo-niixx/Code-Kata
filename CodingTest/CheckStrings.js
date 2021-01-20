// 문제
// 배열의 단어들이 문장에 포함되어있으면 true, 아니라면 false를 리턴해 배열로 만들어라.

// For example:
// checkString("I will pass the interview tomorrow", ["I", "am", "pass"]); // returns [true, false, true]

function checkString(largeStr, smallStr) {
  const length = largeStr.length;
  const arr = smallStr.map((str) => {
    for (let i = 0; i < length; i++) {
      if (largeStr[i] === str[0]) {
        for (let j = 0; j < str.length; j++) {
          if (largeStr[i + j] !== str[j]) return false;
        }
        return true;
      }
    }
  });
  return arr;
}
