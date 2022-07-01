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

let numbers = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const newArray = numbers.sort();
console.log(newArray);

const result = () => {
  const count = {};
  newArray.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  let finalArr = [];

  for (const number in count) {
    const frequency = count[number];

    if (frequency > 1) {
      const innerArr = [];
      for (let i = 0; i < frequency; i++) {
        innerArr.push(number);
      }
      finalArr.push(innerArr);
    } else {
      finalArr.push(number);
    }
  }
  return finalArr;
};

console.log(result());

// 1. Sort elements of the array in place. using Array.sort() : 예상: 1,1,1,1,2,2,2,4,5,10,20,20,391,392,591
// 2. reduce를 사용해서 빅 array 자리 잡아놓고. bigArr = [],
// 3. 다음 숫자와 같은게 감지되면(if조건), 어레이 숫자 index를 가변변수로 만들어놓고, []를 생성하고 거기에 자신과 후임 element를 넣은 후 push한다. 단, 후임의 값을 기억하는 가변변수 자리를 잡아놓고 loop때마다 업뎃해준다.
// 4. 그럼 다음차시 룹에서는 기억해둔 후임값과 새 후임값이 같을 경우, 새 후임을 기존 array (index 0) 에 넣는다.
// 4. 다음숫자와 다른게 감지되면(else조건), []를 생성하지 않고 그냥 push된다.
