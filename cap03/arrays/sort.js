const numbers = [2, 3, 1, 5, 4];

// console.log(numbers.sort());
// console.log(numbers.sort((a, b) => a - b));

function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

console.log(numbers.sort(compareNumbers));

const friends = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Ana',
    age: 20,
  },
  {
    name: 'Chris',
    age: 25,
  },
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }

  return 0;
}

console.log(friends.sort(comparePerson));

let names = ['Ana', 'John', 'john', 'ana'];

function compareStrings(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }

  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }

  return 0;
}

console.log(names.sort(compareStrings));
