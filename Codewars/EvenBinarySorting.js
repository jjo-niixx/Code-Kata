// 문제
// 인자로 주어지는 스트링에 이진법 숫자들이 있다. 3자리의 이진법 숫자가 주어지는데 홀수는 변화가 없어야하고, 짝수는 오름차순으로 자리배치가 이루어져야 한다.

// For example:
//   evenBinary("101 111 100 001 010") // returns "101 111 010 001 100";
//   evenBinary("110 011 001 100 101") // returns "100 011 001 110 101";

function evenBinary(n) {
  let splittedArray = n.split(" ");
  let evenArray = [];
  for (let i = 0; i < splittedArray.length; i++) {
    if (splittedArray[i][splittedArray[i].length - 1] === `1`) continue;
    else {
      evenArray.push(splittedArray[i]);
    }
  }
  console.log(evenArray);
}
