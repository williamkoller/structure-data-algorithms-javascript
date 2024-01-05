import { circleArea as circle, squareArea as square, Book } from './modules.js';

console.log(circle(2));
console.log(square(2));

const book = new Book('Learning JS DataStructures and Algorithms');
book.printTitle();
