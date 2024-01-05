const circleArea = (r) => 3.14 * r ** 2;
const squareArea = (s) => s * s;

export { circleArea, squareArea };

export const area = (r) => 3.14 * r * r;
export const square = (s) => s * s;

export default class Book {
  constructor(title) {
    this.title = title;
  }

  printTitle() {
    console.log(this.title);
  }
}

