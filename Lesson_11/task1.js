// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function delayedText(text, delay) {
	setTimeout(() => {
		console.log(text);
	}, delay);
}

delayedText('Some text here appeared after 5 sec', 5000);
