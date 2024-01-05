/**
 * Type(x) | Type(y) | Result
 * null   | null    | true
 * undefined | null | true
 * Number | String | x == toNumber(y)
 * String | Number | toNumber(x) == y
 * Boolean | Any | toNumber(x) == y
 * Any | Boolean | x == toNumber(y)
 * String|Number | Object | x == toPrimitive(y)
 * Object | String|Number | toPrimitive(x) == y
 */

/**
 * Tipo de valor | Resultado
 * undefined     | E NaN
 * null          | E +0
 * Boolean       | Se for true, é 1; se for false, é +0
 * Number        | O valor numérico
 * Object        | Se o valueOf() devolver um valor primitivo, usa esse valor primitivo sera devolvido;
 * caso contrário, usa o toString() devolver um valor primitivo, usa esse valor primitivo sera devolvido; se não, gera um erro
 */

/**
 * sabemos que a saida do codigo a seguir eh true (tamanho da string > 1)
 */
console.log('Packt' ? true : false); // true

/**
 * o valor boolean eh convertido com toNumber, portanto temos pack == 1
 * e em seguida, o valor de string, eh convertido com toNumber.
 * Como a string eh construida de caracteres alfabeticos, NaN sera devolvido, portanto temos NaN == 1, que eh false.
 */
console.log('packt' == true); // false

/**
 * o valor boolean eh invertido com toNumber, por tanto temos pack == 0
 * e em seguida, o valor de string, eh convertido com toNumber.
 * Como a string eh construida de caracteres alfabeticos, NaN sera devolvido, portanto temos NaN == 0, que eh false.
 */
console.log('packt' == false);

/**
 * Type(x) | Valores | Resultado
 * Number | x tem o mesmo valor que y (mas nao eh NaN) | true
 * String | x e y tem caracteres identicos | true
 * Boolean | x e y sao ambos true ou ambos false | true
 * Object | x e y referem-se ao mesmo objeto | true
 */

console.log('packt' === true); // true
console.log('packt' === 'packt'); // true
let person = { name: 'John' };
let anotherPerson = { name: 'John' };
console.log(person == anotherPerson); // false, pois sao objetos diferentes
