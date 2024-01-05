function sum(x, y, z) {
  return x + y + z;
}

const params = [3, 4, 5];
/**
 * no ES2015, podemos usar o operador spread para passar um array de parametros
 */
console.log(sum(...params));

/**
 * no ES5, podemos usar o metodo apply para passar um array de parametros
 */
console.log(sum.apply(undefined, params));

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, 'hello', true, 7)); // 9

function restParamaterFunction2(x, y) {
  let a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}

console.log(restParamaterFunction2(1, 2, 'hello', true, 7)); // 9
