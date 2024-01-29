const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries();

// console.log(aEntries.next().value); // [0, 1] - position 0, value 1

for (const number of aEntries) {
  console.log(number);
}


