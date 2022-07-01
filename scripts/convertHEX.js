/*  
Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats 
so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX.
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
