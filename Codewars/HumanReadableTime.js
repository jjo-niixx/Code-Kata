// 문제
// 밀리세컨즈로 표현된 인자를 HH:MM:SS로 표현해라

// For example:
//   humanReadable(0), "00:00:00";
//   humanReadable(5), "00:00:05";
//   humanReadable(60), "00:01:00";
//   humanReadable(86399), "23:59:59";
//   humanReadable(359999), "99:59:59";

function humanReadable(seconds) {
  let result = "HH:MM:SS";
  for (let i = 0; i < 3; i++) {
    if (seconds / 3600 >= 1) {
      result = result.replace("HH", `${parseInt(seconds / 3600)}`);
      seconds = seconds % 3600;
    } else if (seconds / 60 >= 1) {
      result = result.replace("MM", `${parseInt(seconds / 60)}`);
      seconds = seconds % 60;
    } else {
      result = result.replace("SS", `${seconds % 60}`);
    }
  }
  return result;
}
