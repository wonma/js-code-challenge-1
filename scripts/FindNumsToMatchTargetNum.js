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
