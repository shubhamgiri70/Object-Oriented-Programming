let bookMethods = {
  getSummary() {
    console.log(`${this.name} is written by  
    ${this.author} and it contains ${this.pages} pages`);
  },
  changePages(pages) {
    this.pages = pages;
    return this.pages;
  },
  changeAuthor(author) {
    this.author = author;
    return author;
  },
};

function createBook(name, author, noOfPages) {
  let book = Object.create(bookMethods);

  book.name = name;
  book.author = author;
  book.pages = noOfPages;
  return book;
}

let book1 = createBook("harry potter", "jk rowling", 400);
let book2 = createBook('what is death', 'sadguru', 350)