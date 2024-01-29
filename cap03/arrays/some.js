let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0;

/**
 * Metodo   | Descricao
 * some()   | Retorna true se pelo menos um elemento do array satisfaz a funcao
 */

let someEven = numbers.some(isEven);

console.log(someEven);

const myMap = numbers.map(isEven);

console.log(myMap);

const myFilter = numbers.filter(isEven);

console.log(myFilter);

console.log(numbers.reduce((previous, current) => previous + current));
