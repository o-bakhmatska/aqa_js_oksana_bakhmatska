//Створіть дві змінні, які містять імена двох осіб. 
//Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. 
//Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

const firstName = "Oksana";
const secondName = "Marina";
let greeting_1 = "Hi, from " + firstName + " and " + secondName;
console.log(greeting_1);

greeting_1 = `Hello, from ${firstName} and my friend ${secondName}`;
console.log(greeting_1); 

