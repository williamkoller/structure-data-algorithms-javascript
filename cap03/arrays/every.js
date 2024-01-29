/**
 * Metodo   | Descricao
 * every()  | Retorna false se todos os elementos do array satisfazem a funcao
 */

const isEven = (x) => x % 2 === 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.every(isEven));

console.log(numbers.some(isEven));
