function sayHello() {
  console.log('Hello');
}

sayHello();

function output(text) {
  console.log(text);
}

output('Hello World');

// apenas o primeiro argumento será utilizado, segundo argumento será ignorado
output('Hello World', 'Test');

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(1, 3);
output(result);
