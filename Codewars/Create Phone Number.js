// 문제
// 매개 변수의 숫자 배열을 주어진 형식으로 리턴해야 한다.

// For example:
//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  return (
    "(" +
    numbers.slice(0, 3).join("") +
    ") " +
    numbers.slice(3, 6).join("") +
    "-" +
    numbers.slice(6, 10).join("")
  );
}
