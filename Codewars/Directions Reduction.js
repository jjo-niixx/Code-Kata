// 문제
// 배열 안에 반대하는 방향이 **이어서** 등장한다면 그 요소들을 제거할 수 있다. 예를 들어 북쪽으로 한 걸음 가고, 바로 남쪽으로 한 걸음 간다면 제자리이기 때문. 이 규칙에 따라 제거할 요소들을 삭제한 결과를 리턴해야 한다.

// For example:
//   ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH",     "WEST"] // => returns ["WEST"]
//   or
//   { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" }; // => returns { "WEST" }
//   or
//   [North, South, South, East, West, North, West] // => returns [West]
//   ["NORTH", "WEST", "SOUTH", "EAST"] // => returns ["NORTH", "WEST", "SOUTH", "EAST"]

function dirReduc(arr) {
  // arr.splice(start, 제거할 요소수)
  let i = 0;
  while (i < arr.length) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }
  return arr;
}
