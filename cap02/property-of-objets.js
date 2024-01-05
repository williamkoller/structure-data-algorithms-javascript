/**
 * ES6 destructuring array
 */

let [x, y] = ['a', 'b'];

console.log(x); // a

let q = 'a';
let w = 'b';

/**
 * ES5 swap variables
 */
[q, w] = [w, q];

let temp = q;

q = w;
w = temp;

/**
 * porperty shorthand
 */

let [a, b] = ['a', 'b'];
let obj = { x, y };

console.log(obj); // { x: 'a', y: 'b' }

let p = 'a';
let t = 'b';

let obj2 = { p, t };

console.log(obj2); // { p: 'a', t: 'b' }

const hello = {
  name: 'abcdef',
  printHello() {
    console.log('Hello');
  },
};

console.log(hello.printHello()); // Hello

const hello2 = {
  name: 'abcdef',
  printHello: function () {
    console.log('Hello');
  },
};

console.log(hello2.printHello()); // Hello
