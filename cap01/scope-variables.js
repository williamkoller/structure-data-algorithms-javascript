let myVariabel = 'global';
myOtherVariabel = 'global';
function myFunction() {
  let myVariabel = 'local';
  return myVariabel;
}

function myOtherFunction() {
  myOtherVariabel = 'local';
  return myOtherVariabel;
}

console.log(myVariabel);
console.log(myFunction());
console.log(myOtherVariabel);
console.log(myOtherFunction());
console.log(myOtherVariabel);
