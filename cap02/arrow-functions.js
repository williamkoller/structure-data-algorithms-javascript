const circleAreaES5 = function circleArea(r) {
  let PI = 3.14;
  let area = PI * r * r;
  return area;
};

console.log(circleAreaES5(2));

const circleArea = (r) => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};

console.log(circleArea(2));

const circleArea2 = (r) => 3.14 * r * r;

console.log(circleArea2(2));

const hello = () => console.log('hello');

hello();
