const getWrongUrl = require('./task_1.js');

describe('GET/endpoint on wrong url', () => {
	test('TEST - should return error message for invalid URL', async () => {
		const result = await getWrongUrl();
		expect(result).toBe('Request failed');
	});
});
