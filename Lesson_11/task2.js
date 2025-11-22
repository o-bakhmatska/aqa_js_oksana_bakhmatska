// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//<https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
//  Присвойте значення отримані від цих виразів до змінних

function getTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.catch((error) => {
			console.error('ERROR in getTodo:', error);
		});
}

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.catch((error) => {
			console.error('ERROR in getUser:', error);
		});
}

const promisesCollection = Promise.all([getTodo(), getUser()]);
promisesCollection
	.then(([todo, user]) => {
		console.log('RESULT Promise.all:');
		console.log('Todo:', todo);
		console.log('User:', user);
	})
	.catch((error) => {
		console.error('ERROR in Promise.all:', error);
	});

const promisesRace = Promise.race([getTodo(), getUser()]);
promisesRace
	.then((result) => {
		console.log('RESULT Promise.race:');
		console.log(result);
	})
	.catch((error) => {
		console.error('ERROR in Promise.race:', error);
	});
