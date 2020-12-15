// 문제
// solution 함수는 skill과 skill_trees라는 두 개의 인자를 받는다. skill의 하나 하나의 문자가 지켜야 하는 skill의 순서이고, skill_trees의 요소 중 어떤 요소가 skill의 순서를 지키고 있는지 찾아야 한다.

// For example:
//   solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]	// => returns 2

function solution(skill, skill_trees) {
  let split = skill.split("");
  let numArr = [];

  for (let i = 0; i < skill_trees.length; i++) {
    for (let j = 0; j < split.length; j++) {
      skill_trees[i] = skill_trees[i].replace(split[j], j);
    }
  }

  for (let i = 0; i < skill_trees.length; i++) {
    numArr.push(
      skill_trees[i]
        .split("")
        .map((el) => el * 1)
        .filter((el) => !isNaN(el))
    );
  }

  for (let i = numArr.length - 1; i >= 0; i--) {
    if (
      numArr[i].filter((num, idx) => num === idx).length !== numArr[i].length
    ) {
      numArr.splice(i, 1);
    }
  }
  return numArr.length;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
