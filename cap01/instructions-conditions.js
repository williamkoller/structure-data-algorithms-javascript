let num;

num = 1;

if (num === 1) {
  console.log('num is equal to 1');
}

// let num = 0;

// if (num === 1) {
//   console.log('num is equal to 1');
// } else {
//   console.log('num is not equal to 1, the value of num is ' + num);
// }

// if (num === 1) {
//   num--;
// } else {
//   num++;
// }

num == 1 ? num-- : num++;

// let month = 5;
// if (month === 1) {
//   console.log('January');
// } else if (month === 2) {
//   console.log('February');
// } else if (month === 3) {
//   console.log('March');
// } else {
//   console.log('Month is not January, February or March');
// }

let month = 5;

switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  default:
    console.log('Month is not January, February or March');
    break;
}
