const reIndex = require('./re-index');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return reIndex(this);
};

numbers = numbers.removeFirstPosition();

console.log(numbers.length);
console.log(numbers);


numbers.slice(5, 3)

console.log(numbers.length)
console.log(numbers)