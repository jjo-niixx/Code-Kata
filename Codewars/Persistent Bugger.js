// 문제
// 양수 매개 변수를 갖는 `persistence` 함수를 완성해야 한다. 이때 이 함수는 단일 숫자가 나올 때까지 **몇 번** 매개 변수를 이루고 있는 숫자들을 곱해야 하는지를 리턴해야 한다.

// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  let count = 0;

  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b, 1);
    count++;
  }

  return count;
}
