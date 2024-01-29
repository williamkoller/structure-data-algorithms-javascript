const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0;

const mapEven = numbers.map(isEven);

console.log(mapEven);
