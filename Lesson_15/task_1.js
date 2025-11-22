const axios = require('axios');

async function getUrl() {
	try {
		const response = await axios.get('https://example.com/api/data');
		return response.data;
	} catch (error) {
		return 'Request failed';
	}
}

module.exports = getUrl;
