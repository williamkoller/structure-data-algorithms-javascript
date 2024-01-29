const numbers = [1, 2, 3, 4, 5];

const numbersCopy = Array.of(1, 2, 3, 4, 5);

console.log(numbers.fill(0));
console.log(numbers.fill(2, 1));
console.log(numbers.fill(1, 3, 5));

let ones = Array(6).fill(1);
console.log(ones);
