/*  
Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, 
when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]
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

/* --------------- Take two arguments ----------------
1. const findTwo = (arr, target) => {

}
2.  [1,2,3,15,20,145,2000]에서 두개를 찾아서 2001을 만들어야함.
  
for (startingNumber=0; startingNumber < arr.length -1; startingNumber++) {
  startiingNumber본인과 본인다음 (본인 + 1) index를 더하고, (처음은 본인0 ~ <  arr.length 까지고 )
  startingnumber본인과 본인다다음 본인 + 2 nidex를 더하고, (그다음은 본인1 ~ <  arr.length -1 까지고 )

}
*/
const myArray = [1, 2, 3, 15, 20, 145, 2000];

const findTwo = (arr, target) => {
  for (let index = 0; index < arr.length; index++) {
    let targetIndex = 1;
    let lastIndex = arr.length;
    let num1 = arr[index];
    let num2 = arr[index + targetIndex];
    while (targetIndex < lastIndex) {
      num2 = arr[targetIndex];
      if (num1 + num2 === target) {
        return `The two numbers that make a total of ${target} are ${num1} and ${num2}.`;
      }
      targetIndex++;
    }
  }
};
console.log(findTwo(myArray, 35));
