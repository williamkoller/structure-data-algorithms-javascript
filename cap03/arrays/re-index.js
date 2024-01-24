let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

console.log(numbers.length);
console.log(numbers);

module.exports = Array.prototype.reIndex = function (myArray) {
  const newArray = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }

  return newArray;
};


