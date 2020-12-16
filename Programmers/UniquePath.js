// 문제
// 게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.
// U: 위쪽으로 한 칸 가기
// D: 아래쪽으로 한 칸 가기
// R: 오른쪽으로 한 칸 가기
// L: 왼쪽으로 한 칸 가기
// 캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.
// 이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)
// 단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

// For example:
//   ULURRDLLU // => returns 7
//   LULLLLLLU // => returns	7

// 모범 답안
function solution(dirs) {
  var ansObj = {};
  var currentX = 0;
  var currentY = 0;
  for (var i = 0; i < dirs.length; i++) {
    var nextX = currentX;
    var nextY = currentY;
    var key = "key";
    if (dirs[i] === "U") {
      nextY = currentY + 1;
      key = key + currentX + currentY + nextX + nextY;
    }
    if (dirs[i] === "R") {
      nextX = currentX + 1;
      key = key + currentX + currentY + nextX + nextY;
    }
    if (dirs[i] === "D") {
      nextY = currentY - 1;
      key = key + nextX + nextY + currentX + currentY;
    }
    if (dirs[i] === "L") {
      nextX = currentX - 1;
      key = key + nextX + nextY + currentX + currentY;
    }
    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) {
      //do nothing
    } else {
      ansObj[key] = 1;
      currentX = nextX;
      currentY = nextY;
    }
  }
  return Object.keys(ansObj).length;
}
