// 문제
// 첫 번째 문자를 단어의 끝으로 옮기고, "ay"를 붙여라. 이때 문장부호는 가만히 변경 없이 그대로 두어야 한다.

// For example:
//   pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//   pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const splittedStr = str.split(" ");
  let resultStr = "";
  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i] === "!" || splittedStr[i] === "?") {
      resultStr += splittedStr[i];
    } else {
      let addedStr = splittedStr[i] + splittedStr[i][0] + "ay";
      let removedStr = addedStr.substring(1);
      resultStr += removedStr + " ";
    }
  }
  return resultStr.trim();
}
