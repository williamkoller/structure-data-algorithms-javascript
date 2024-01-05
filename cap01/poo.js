let obj = new Object();

let objTwo = {};

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey',
  },
  address: 'Middle Earth',
};

console.log(obj);

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title);
book.title = 'new title';
console.log(book.title);

Book.prototype.printTitle = function () {
  console.log(this.title);
};

book.printTitle();

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIbsn = function () {
    console.log(this.isbn);
  };
}

book.printIbsn();
