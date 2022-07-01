function first() {
  const greet = 'hi';
  function second() {
    alert(greet);
  }
  return second;
}

const executeGreet = first();
executeGreet();
