const axios = require('axios');

async function sendGetRequest() {
	const base_url = 'https://postman-echo.com/get';

	try {
		const response = await axios.get(base_url, {
			params: {
				user: 'oksana',
				id: 123,
			},
			headers: {
				'X-Custom-Header': 'TestHeaderValue',
				Authorization: 'Bearer demo-token',
			},
		});

		return response.data;
	} catch (error) {
		return error.message;
	}
}

module.exports = sendGetRequest;
