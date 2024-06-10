// let form = document.querySelector(".form");
// let title = document.getElementById("title");
// let author = document.getElementById("author");
// let isbn = document.getElementById("isbn");
// let root = document.querySelector(".content-container");

// function handleSubmit(event) {
//   event.preventDefault();
//   let div = document.createElement("div");
//   div.classList.add("book-details");
//   let paraOne = document.createElement("p");
//   paraOne.innerText = title.value;
//   title.value = "";
//   let paratwo = document.createElement("p");
//   paratwo.innerText = author.value;
//   author.value = "";
//   let parathree = document.createElement("p");
//   parathree.innerText = isbn.value;
//   isbn.value = "";
//   let removeBtn = document.createElement("button");
//   removeBtn.innerText = "X";
//   removeBtn.classList.add("remove-btn");

//   div.append(paraOne, paratwo, parathree, removeBtn);
//   root.append(div);

//   removeBtn.addEventListener("click", function () {
//     paraOne.innerText = "";
//     paratwo.innerText = "";
//     parathree.innerText = "";
//     removeBtn.style.display = "none";
//   });
// }

// form.addEventListener("submit", handleSubmit);

/* <p>Shilver</p>
<p>Sam mendis</p>
<p>853050204</p>
<button class="remove-btn">x</button> */

let form = document.querySelector(".form");
let root = document.querySelector(".content-container");

const titleEle = form.elements.bookTitle;
const authorEle = form.elements.bookAuthor;
const isbnEle = form.elements.isbn;

class BookList {
  constructor(books = []) {
    this.books = books;
  }

  addBook(title, author, isbn) {
    let book = new Book(title, author, isbn);
    this.books.push(book);
    this.createUI();
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
    this.createUI();
  }

  createUI() {
    // Clear all book details, but keep the header and hr elements
    root.innerHTML = `
      <div class="booklist-heading">
        <p>Title</p>
        <p>Author</p>
        <p>ISBN#</p>
        <p>Remove</p>
      </div>
      <hr />
    `;

    this.books.forEach((book) => {
      let div = document.createElement("div");
      div.classList.add("book-details");

      let paraOne = document.createElement("p");
      paraOne.innerText = book.title;

      let paraTwo = document.createElement("p");
      paraTwo.innerText = book.author;

      let paraThree = document.createElement("p");
      paraThree.innerText = book.isbn;

      let removeBtn = document.createElement("button");
      removeBtn.innerText = "X";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", () => {
        this.removeBook(book.isbn);
      });

      div.append(paraOne, paraTwo, paraThree, removeBtn);
      root.append(div);
    });
  }
}

let library = new BookList();

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const title = titleEle.value;
  const author = authorEle.value;
  const isbn = isbnEle.value;

  // Optional: Prevent adding duplicate ISBN
  if (library.books.some((book) => book.isbn === isbn)) {
    alert("This ISBN already exists.");
    return;
  }

  library.addBook(title, author, isbn);

  form.reset();
}

form.addEventListener("submit", handleSubmit);
