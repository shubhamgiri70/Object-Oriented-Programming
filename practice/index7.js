// factory pattern of creating object

function createBook(name, author, pages) {
  let book = {};
  book.name = name;
  book.author = author;
  book.pages = pages;

  book.getSummary = function () {
    return `${book.name} is written by ${book.author} with ${book.pages} pages`;
  };
  book.changePages = function (pages) {
    book.pages = pages;
    return book.pages;
  };
  book.changePages = function (author) {
    book.author = author;
    return book.author;
  };

  return book;
}

// prototypal pattern

let bookMethods = {
  getSummary: function () {
    return `${this.name} is written by ${this.author} with ${this.pages} pages`;
  },
  changePages: function (pages) {
    this.pages = pages;
    return this.pages;
  },
  changePages: function (author) {
    this.author = author;
    return this.author;
  },
};

function createBook(name, author, pages) {
  let book = Object.create(bookMethods);
  book.name = name;
  book.author = author;
  book.pages = pages;

  return book;
}

// pseudoclassical Pattern

function CreateBook(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

CreateBook.prototype = {
  getSummary: function () {
    return `${this.name} is written by ${this.author} with ${this.pages} pages`;
  },
  changePages: function (pages) {
    this.pages = pages;
    return this.pages;
  },
  changePages: function (author) {
    this.author = author;
    return this.author;
  },
};

// Class Pattern

class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
  }

  getSummary() {
    return `${this.name} is written by ${this.author} with ${this.pages} pages`;
  }

  changePages(pages) {
    this.pages = pages;
    return this.pages;
  }

  changeAuthor(author) {
    this.author = author;
    return this.author;
  }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 400);
let book2 = new Book("What is Death", "Sadhguru", 350);

console.group(book1.name);
console.log(book1.name);
console.log(book1.author);
console.log(book1.pages);
console.log(book1.getSummary());
console.log(book1.changePages(300));
console.groupEnd();

console.group(book2.name);
console.log(book2.name);
console.log(book2.author);
console.log(book2.pages);
console.log(book2.getSummary());
console.log(book2.changePages(200));
console.groupEnd();
