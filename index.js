// script.js

// Initialize an empty array to hold the books
let library = [];

// Get DOM elements
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("books");
const searchInput = document.getElementById("search");

// Add Book Function
function addBook(title, author, year, genre) {
  const book = { title, author, year, genre };
  library.push(book);
  displayBooks(library);
}

// Display Books Function
function displayBooks(books) {
  bookList.innerHTML = ""; // Clear the list first
  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${book.title}</strong> by ${book.author} (${book.year}) - ${book.genre}
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookList.appendChild(li);
  });
}

// Remove Book Function
function removeBook(index) {
  library.splice(index, 1); // Remove the book at the given index
  displayBooks(library);
}

// Search Books Function
function searchBooks(query) {
  const lowerQuery = query.toLowerCase();
  const filteredBooks = library.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) || 
    book.author.toLowerCase().includes(lowerQuery)
  );
  displayBooks(filteredBooks);
}

// Form Submit Event Listener to Add a Book
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const genre = document.getElementById("genre").value;

  // Add book and reset the form
  addBook(title, author, year, genre);
  bookForm.reset();
});

// Search Input Event Listener
searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  searchBooks(query);
});










// // Library array to store the book objects
// let library = [];

// // Book constructor function to create new book objects
// function Book(title, author, year, genre) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.genre = genre;
// }

// // 1. Add a Book to the Library
// function addBook(title, author, year, genre) {
//   const newBook = new Book(title, author, year, genre);
//   library.push(newBook);
//   console.log(`Book added: ${title}`);
// }

// // 2. Display All Books in the Library
// function displayBooks() {
//   if (library.length === 0) {
//     console.log("The library is empty.");
//     return;
//   }
  
//   library.forEach((book, index) => {
//     console.log(`Book ${index + 1}:`);
//     console.log(`Title: ${book.title}`);
//     console.log(`Author: ${book.author}`);
//     console.log(`Year: ${book.year}`);
//     console.log(`Genre: ${book.genre}`);
//     console.log("-------------------");
//   });
// }

// // 3. Search for a Book by Title or Author
// function searchBooks(query) {
//   const lowerCaseQuery = query.toLowerCase();
//   const searchResults = library.filter(book => 
//     book.title.toLowerCase().includes(lowerCaseQuery) || 
//     book.author.toLowerCase().includes(lowerCaseQuery)
//   );
  
//   if (searchResults.length > 0) {
//     searchResults.forEach(book => {
//       console.log(`Found Book:`);
//       console.log(`Title: ${book.title}`);
//       console.log(`Author: ${book.author}`);
//       console.log(`Year: ${book.year}`);
//       console.log(`Genre: ${book.genre}`);
//       console.log("-------------------");
//     });
//   } else {
//     console.log("No books found for that query.");
//   }
// }

// // 4. Remove a Book by Title
// function removeBook(title) {
//   const initialLength = library.length;
//   library = library.filter(book => book.title.toLowerCase() !== title.toLowerCase());
  
//   if (library.length < initialLength) {
//     console.log(`Book removed: ${title}`);
//   } else {
//     console.log(`No book found with title: ${title}`);
//   }
// }

// // 5. (Bonus) Save Library to Local Storage
// function saveToLocalStorage() {
//   localStorage.setItem('library', JSON.stringify(library));
//   console.log("Library saved to local storage.");
// }

// function loadFromLocalStorage() {
//   const storedLibrary = localStorage.getItem('library');
//   if (storedLibrary) {
//     library = JSON.parse(storedLibrary);
//     console.log("Library loaded from local storage.");
//   } else {
//     console.log("No saved library found in local storage.");
//   }
// }

// // Example Usage:

// // Adding books to the library
// addBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
// addBook("1984", "George Orwell", 1949, "Dystopian");
// addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic");

// // Display all books
// displayBooks();

// // Search for a book
// searchBooks("orwell");

// // Remove a book
// removeBook("1984");

// // Display all books after removal
// displayBooks();

// // Save and load from local storage (Bonus)
// saveToLocalStorage();
// loadFromLocalStorage();
