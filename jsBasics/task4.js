//Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const circle_radius = 10;
let circle_area = Math.PI * Math.pow(circle_radius, 2);
console.log('Task 4.1 -> ' + circle_area.toFixed(2));

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника
// Створіть змінну width і присвойте їй числове значення ширини прямокутника
//Обчисліть площу прямокутника за формулою length * width і виведіть результат.

const length = 10;
const width = 15;
let rectangle_area = length * width;
console.log('Task 4.2 -> ' + rectangle_area);

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const cylinder_radius = 10;
const cylinder_height = 30;
let cylinder_volume = Math.PI * Math.pow(cylinder_radius, 2) * cylinder_height;
console.log('Task 4.3 -> ' + cylinder_volume.toFixed(2));
