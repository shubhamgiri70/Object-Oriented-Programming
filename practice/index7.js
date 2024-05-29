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

let book1 = createBook("harry potter", "jk rowling", 400);
let book2 = createBook("what is death", "sadguru", 350);

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


