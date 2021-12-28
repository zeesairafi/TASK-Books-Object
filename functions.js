/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const books = require("./books.json");
// console.log(book[0]);

/**************************************************************
 * numberOfAuthors(book)
 * - recieves a book object
 * - returns the number of authors that the book has
 ****************************************************************/
function numberOfAuthors(book) {
  // Your code here
  return book.authors.length;
}
 console.log(numberOfAuthors(books[1]))

/**************************************************************
 * getBookById(bookId, books):
 * - receives a book id
 * - recieves an array of book objects
 * - returns the book object with the same id as the bookId provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getBookById(bookId, books) {
  // Your code here
  return books.find((book)=>book.id==bookId)
}
 console.log(getBookById(30, books));

/**************************************************************
 * getbookByauthorName(authorName, books):
 * - receives a author name (string)
 * - recieves an array of book objects
 * - returns the book object that contains a author with the author name provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getbookByauthorName(authorName, books) {
  // Your code here
  return books.find((book)=> book.authors.some((author) => author.name  == authorName))
}
 console.log(getbookByauthorName("Neil Gaiman", books));

/**************************************************************
  * addSummaryToBook(summary, book):
  * - receives a book object
  * - recieves a summary
  * - adds the summary to the book object 
  * - return the book object 
  *

  ****************************************************************/
function addSummaryToBook(summary, book) {
  // Your code here
  book.summary = summary
  return book;
}
 console.log(addSummaryToBook("this is good book about i dont remember what", books[0]));

/**************************************************************
  * getBookProperty(property, book):
  * - receives a book object
  * - recieves a property (string)
  * - return the book property 
  *

  ****************************************************************/
function getBookProperty(property, book) {
  // Your code here
  return book[property];
}
 console.log(getBookProperty("color", books[0]));
 console.log(getBookProperty("title", books[0]));
