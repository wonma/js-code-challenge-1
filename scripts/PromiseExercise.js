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

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 4000);
}); // a Promise that processes a function and is ready to lay an egg!

// #2) Run the above promise and make it console.log "success"
myPromise.then(resp => console.log(resp));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve(
  setTimeout(() => {
    console.log('oh oh oh');
  }, 2000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Oops something went wrong')); // then안에 두개의 callback이 존재한다. 오류안났을때 실행되는 콜백과 status가 reject결과일때 실행되는 콜백
// 그렇다면 catch로 에러를 잡는건 어떤때이지?

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json()); // this itself is an object.
  }) // this is an array of objects
)
  .then(array => {
    console.log(array[0].name);
    console.log(array[1].name);
    console.log(array[2].name);
    console.log(array[3].name);
  })
  .catch(err => console.log('error happened.', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
