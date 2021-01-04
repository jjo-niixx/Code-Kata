// 문제
// 계산은 두 개의 숫자와 연산자가 나오도록 해야한다.

// For example:
//   seven(times(five())); // must return 35
//   four(plus(nine())); // must return 13
//   eight(minus(three())); // must return 5
//   six(dividedBy(two())); // must return 3
//   eight(dividedBy(three())); // must return 2

function zero(left) {
  return operation(left, 0);
}
function one(left) {
  return operation(left, 1);
}
function two(left) {
  return operation(left, 2);
}
function three(left) {
  return operation(left, 3);
}
function four(left) {
  return operation(left, 4);
}
function five(left) {
  return operation(left, 5);
}
function six(left) {
  return operation(left, 6);
}
function seven(left) {
  return operation(left, 7);
}
function eight(left) {
  return operation(left, 8);
}
function nine(left) {
  return operation(left, 9);
}

function operation(left, num) {
  return left ? Math.floor(eval(num + left)) : num;
}

function plus(right) {
  return "+" + right;
}
function minus(right) {
  return "-" + right;
}
function times(right) {
  return "*" + right;
}
function dividedBy(right) {
  return "/" + right;
}
