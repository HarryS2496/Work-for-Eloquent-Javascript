function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (input % 3 === 0) {
    console.log('Fizz');
  }
  else if (input % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(input);
  }
}
fizzBuzz(15);
fizzBuzz(25);
fizzBuzz(39);
fizzBuzz(98);