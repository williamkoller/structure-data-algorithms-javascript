const numbers = [1, 2, 3, 4, 5];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

iterator = numbers[Symbol.iterator]();

for (const number of iterator) {
  console.log(number);
}