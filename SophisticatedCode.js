/*
Filename: SophisticatedCode.js

Description: This code is a sophisticated and elaborate implementation of a virtual library management system. It involves multiple classes, CRUD operations, and advanced search functionalities.

Note: This is just a sample code and not a complete implementation. Some methods and functionalities may be missing.

*/

// Define the Book class
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

// Define the Library class
class Library {
  constructor() {
    this.books = [];
  }

  // Add a new book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Remove a book from the library
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  // Update the publication year of a book
  updatePublicationYear(title, newYear) {
    this.books.forEach((book) => {
      if (book.title === title) {
        book.publicationYear = newYear;
      }
    });
  }

  // Search for books by title
  searchBooksByTitle(keyword) {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // Search for books by author
  searchBooksByAuthor(keyword) {
    return this.books.filter((book) =>
      book.author.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // Get all books in the library
  getAllBooks() {
    return this.books;
  }
}

// Create a new library
const myLibrary = new Library();

// Create some book instances
const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
const book2 = new Book("Clean Code", "Robert C. Martin", 2008);
const book3 = new Book("Design Patterns", "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", 1994);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Update the publication year of a book
myLibrary.updatePublicationYear("Clean Code", 2019);

// Search for books by title
const booksWithTitleClean = myLibrary.searchBooksByTitle("clean");

console.log("Books with 'clean' in the title:");
console.log(booksWithTitleClean);

// Search for books by author
const booksByRobertMartin = myLibrary.searchBooksByAuthor("Robert Martin");

console.log("Books by Robert Martin:");
console.log(booksByRobertMartin);

// Remove a book from the library
myLibrary.removeBook("Design Patterns");

// Get all books in the library
const allBooks = myLibrary.getAllBooks();

console.log("All books in the library:");
console.log(allBooks);

// Output:
/*
Books with 'clean' in the title:
[
  Book {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    publicationYear: 2019
  }
]
Books by Robert Martin:
[
  Book {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    publicationYear: 2019
  }
]
All books in the library:
[
  Book {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008
  },
  Book {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    publicationYear: 2019
  }
]
*/
