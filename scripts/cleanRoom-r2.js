/*
Clean the room function: given an input of
[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return:
[[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].
Bonus: Make it so it organizes strings differently from number types.
i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]
*/

/* -------- Print out console.log in HTML --------*/
(function() {
  var logger = document.getElementById('log');
  console.log = function(message) {
    if (typeof message == 'object') {
      logger.innerHTML +=
        (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
    } else {
      logger.innerHTML += message + '<br />';
    }
  };
})();
/* ------------------------------------------------ */

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

let object = {}; // 새 서랍에 내가 재정리해서 넣고 싶을 때.

/* 알고보면 굉장히 단순한걸 기계에 묻고있음.
   오브젝트에 해당 넘버로 이름이 지어진 'key'가 있으면 value를 increment해주고
   그런 이름을 가진 key가 존재하지 않으면 (즉 레퍼런스 할게 없으니까 undefined라고 나오면)
   value는 1의 카운트를 갖게 함.
*/

array.forEach(element => {
  object[element] = (object[element] || 0) + 1;
});

// key를 value 수만큼 push하기
// ---- 1일경우: []에 안넣고 push하기
// ---- 2이상일경우: []에다 룹 한 후 push하기

// object를 enumerate할 수 있는 method는
// obj.keys, obj.entries, obj.values가 대표적으로 쓰이고
// for (const variable in object) {} 도 많이 쓰임.

let newArr = [];
for (const prop in object) {
  let value = object[prop];
  if (value === 1) {
    newArr.push(prop);
  } else {
    let innerArr = [];
    let i = 0;
    while (i < value) {
      innerArr.push(prop);
      i++; // 전에 에러났을때는 이 incrementer를 빼먹은게 원인이었음.
    }
    newArr.push(innerArr);
  }
}
console.log(newArr);

// console.log(newArr);
