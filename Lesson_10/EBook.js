// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу".
//  Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook
//   (все те саме що і для Book але ще формат файлу).
//  Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

import Book from "./Book.js";

class EBook extends Book {
    constructor(name, author, year, format) {
      super(name, author, year);
      this.format = format;
    }
    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== "string" || value.trim() === "") {
          throw new Error("Формат файлу повинен бути непорожнім рядком.");
        }
        this._format = value;
      }
  
    printInfo() {
      console.log(`EBook description. Name: ${this.name}. Author: ${this.author}. Year: ${this.year}, Format: ${this.format}`);
    }
    static createFromBook(book, format) {
        if (!(book instanceof Book)) {
          throw new Error("Аргумент повинен бути екземпляром класу Book.");
        }
        return new EBook(book.name, book.author, book.year, format);
    }    
  }

export default EBook;