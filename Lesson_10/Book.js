class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}
	get name() {
		return this._name;
	}
	get author() {
		return this._author;
	}
	get year() {
		return this._year;
	}

	set name(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Назва книги повинна бути рядком і не порожньою.');
		}
		this._name = value;
	}

	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Автор книги повинен бути рядком і не порожнім.');
		}
		this._author = value;
	}

	set year(value) {
		if (typeof value !== 'number' || value < 0) {
			throw new Error('Рік видання повинен бути додатним числом.');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Book description. Name: ${this.name}. Author: ${this.author}. Year: ${this.year}`);
	}

	static getOldestBook(books) {
		if (!Array.isArray(books) || books.length === 0) {
			throw new Error('Необхідно передати масив книг.');
		}

		return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
	}
}

export default Book;
