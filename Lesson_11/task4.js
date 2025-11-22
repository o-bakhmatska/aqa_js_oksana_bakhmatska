// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

class ApiGet {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	checkResponse(response, message) {
		return response.ok ? response.json() : Promise.reject(message);
	}

	async getTodo() {
		try {
			const response = await fetch(`${this.baseURL}/todos/1`);
			return await this.checkResponse(response, 'ERROR while get todo');
		} catch (error) {
			console.error('ERROR in getTodo:', error);
		}
	}

	async getUser() {
		try {
			const response = await fetch(`${this.baseURL}/users/1`);
			return await this.checkResponse(response, 'ERROR while get user');
		} catch (error) {
			console.error('ERROR in getUser:', error);
		}
	}
}

class ApiPromise {
	constructor(api) {
		this.api = api;
	}

	async promiseAll() {
		try {
			const [todo, user] = await Promise.all([this.api.getTodo(), this.api.getUser()]);
			console.log('Promise.all:');
			console.log('Todo:', todo);
			console.log('User:', user);
		} catch (error) {
			console.error('ERROR in promiseAll:', error);
		}
	}

	async promiseRace() {
		try {
			const result = await Promise.race([this.api.getTodo(), this.api.getUser()]);
			console.log('Promise.race:');
			console.log(result);
		} catch (error) {
			console.error('ERROR in promiseRace:', error);
		}
	}
}

const api1 = new ApiGet('https://jsonplaceholder.typicode.com');
const promiser = new ApiPromise(api1);

await promiser.promiseAll();
await promiser.promiseRace();
