import Book from "./Book.js";
import EBook from "./EBook.js";


const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Hobbit", "J.R.Tolkien", 1937);
const book3 = new Book("Harry Potter", "J.K. Rowling", 1997);

const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");
  
book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

// Using getter/setter 
ebook1.format = "EPUB";
console.log(`Updated format: ${ebook1.format}`);
ebook1.printInfo();

book3.name = "Harry Potter I";
console.log(`Updated name: ${book3.name}`);
book3.printInfo();

//Using static method
const oldestBook = Book.getOldestBook([book1, book2, book3, ebook1]);
console.log(`Найдавніша книга: ${oldestBook.name} (${oldestBook.year})`);

//Adding new EBook from existing Book
const ebookFromBook = EBook.createFromBook(book3, "PDF");
ebookFromBook.printInfo();