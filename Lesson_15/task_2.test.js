const sendGetRequest = require('./task_2.js');

describe('Axios request with custom headers and params', () => {
	test('TEST - should include URL parameters and headers in the request', async () => {
		const data = await sendGetRequest();

		expect(data.args.user).toBe('oksana');
		expect(data.args.id).toBe('123');

		expect(data.headers['x-custom-header']).toBe('TestHeaderValue');
		expect(data.headers['authorization']).toBe('Bearer demo-token');
	});
});
