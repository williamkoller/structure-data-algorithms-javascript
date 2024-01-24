const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers[numbers.length] = 10

console.log(numbers.length)
console.log(numbers)

numbers.push(11)
numbers.push(12, 13)

console.log(numbers.length)
console.log(numbers)