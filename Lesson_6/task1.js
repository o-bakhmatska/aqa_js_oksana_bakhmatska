// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function rectangleArea(width, height) {
	return width * height;
}
console.log('function declaration example ->', rectangleArea(5, 10));

const rectangleArea1 = function (width, height) {
	return width * height;
};
console.log('function expression example ->', rectangleArea1(2, 5));

const rectangleArea2 = (width, height) => width * height;
console.log('arrow function ->', rectangleArea1(100, 100));
