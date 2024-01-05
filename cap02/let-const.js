var framework = 'Angular';
var framework = 'React';
console.log(framework); // React

let language = 'JavaScript';
// let language = 'Ruby'; SyntaxError: Identifier 'language' has already been declared

console.log(language);

const PI = 3.141593;
// PI = 3.14; // TypeError: Assignment to constant variable.
console.log(PI);

const jsFramework = {
  name: 'Angular',
};

jsFramework.name = 'React';

// jsFramework = {
//   name: 'Vue',
// }; // TypeError: Assignment to constant variable.

let movie = 'Lord of the Rings';
// let movie = 'Batman v Superman';// SyntaxError: Identifier 'movie' has already been declared

function starWarsFan() { 
  const movie = 'Star Wars';
  return movie;
}

function marvelFan() {
  movie = 'The Avengers';
  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phrase = 'Warcraft';
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text';
    phrase = 'For the Horde!';
    console.log('Inside if: ' + phrase);
  }
  phrase = 'For the Alliance!';
  console.log('After if: ' + phrase);
}

console.log(movie)
console.log(starWarsFan())
console.log(marvelFan())
console.log(movie)
blizzardFan()