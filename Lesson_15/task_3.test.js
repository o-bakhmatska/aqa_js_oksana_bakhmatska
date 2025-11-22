const axios = require('axios');
const getData = require('./task_1.js');

jest.mock('axios');

afterEach(() => {
	jest.resetAllMocks();
});

describe('Axios request mocking', () => {
	test('TEST - should return data on successful request', async () => {
		axios.get.mockResolvedValue({
			data: { message: 'Success', items: [1, 2, 3], status: 200 },
		});

		const result = await getData();

		expect(result).toEqual({ message: 'Success', items: [1, 2, 3], status: 200 });
		expect(axios.get).toHaveBeenCalledWith('https://example.com/api/data');
	});

	test('TEST - should return error message on failed request', async () => {
		axios.get.mockRejectedValue(new Error('Network error'));

		const result = await getData();

		expect(result).toBe('Request failed');
		expect(axios.get).toHaveBeenCalledTimes(1);
	});
});
