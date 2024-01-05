let num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/**
 * Operador aritmético | Descrição
 * +                   | Adição
 * -                   | Subtração
 * *                   | Multiplicação
 * /                   | Divisão
 * %                   | Resto
 * ++                  | Incremento
 * --                  | Decremento
 */

/**
 * Operador de atribuicao | Descrição
 * =                      | Atribuição
 * +=                     | Adição (x+=y é o mesmo que x = x + y)
 * -=                     | Subtração (x-=y é o mesmo que x = x - y)
 * *=                     | Multiplicação (x*=y é o mesmo que x = x * y)
 * /=                     | Divisão (x/=y é o mesmo que x = x / y)
 * %=                     | Resto (x%=y é o mesmo que x = x % y)
 */

/**
 * Operador de comparação | Descrição
 * ==                      | Igual a
 * ===                     | Igual a (valor e tipo)
 * !=                      | Diferente de
 * !==                     | Diferente de (valor e tipo)
 * >                       | Maior que
 * <                       | Menor que
 * >=                      | Maior ou igual a
 * <=                      | Menor ou igual a
 */

/**
 * Operador lógico | Descrição
 * &&               | E
 * ||               | Ou
 * !                | Não
 */

console.log('5 & 1:', 5 & 1);
console.log('5 | 1:', 5 | 1);
console.log('~ 5:', ~5);
console.log('5 ^ 1:', 5 ^ 1);
console.log('5 << 1:', 5 << 1);
console.log('5 >> 1:', 5 >> 1);

/**
 * Operador bitwise | Descrição
 * &                 | E
 * |                 | Ou
 * ~                 | Não
 * ^                 | Ou exclusivo (XOR)
 * <<                | Deslocamento a esquerda
 * >>                | Deslocamento a direita
 */

console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

let myObj = { name: 'John', age: 22 };
delete myObj.age;

console.log('myObj:', myObj);
