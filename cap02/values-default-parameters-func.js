/**
 * com ES2015, podemos definir valores padrao para os parametros de uma funcao
 */

function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

console.log(sum(4, 2));

/**
 * sem ES2015, podemos definir valores padrao para os parametros de uma funcao
 */

function sum2(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 2;
  if (z === undefined) z = 3;
  return x + y + z;
}

console.log(sum2(4, 2));

function sum3() {
  let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  let z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  return x + y + z;
}

console.log(sum3(4, 2));
