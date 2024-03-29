/**
 * Tipo de valor | Resultado
 * undefined     | false
 * null          | false
 * Boolean       | O valor do booleano
 * Number        | false se +0, -0, ou NaN; caso contrário, true
 * String        | false se string vazia; caso contrário, true
 *  
*/


function testTruthy(val) {
  return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)
testTruthy(''); // false
testTruthy('Packt'); // true
testTruthy(new String('')); // true (object is always true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)
testTruthy({}); // true (object is always true)
var obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // false (age does not exist)