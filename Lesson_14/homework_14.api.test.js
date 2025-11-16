const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('API tests', () => {
	test('POST /posts, should create new post', async () => {
		const newPost = {
			title: 'Test new post title',
			body: 'Test post body',
			userId: 1,
		};

		const response = await axios.post(`${BASE_URL}/posts`, newPost);

		expect(response.status).toBe(201);

		expect(response.data).toMatchObject({
			...newPost,
			id: expect.any(Number),
		});
	});

	test('POST /users, should create new user', async () => {
		const newUser = {
			name: 'Oksana B.',
			email: 'oksanab@example.com',
			username: 'oksanab',
		};

		const response = await axios.post(`${BASE_URL}/users`, newUser);

		expect(response.status).toBe(201);

		expect(response.data).toMatchObject({
			...newUser,
			id: expect.any(Number),
		});
	});

	test('GET /posts, should return list of posts', async () => {
		const response = await axios.get(`${BASE_URL}/posts`);

		expect(response.status).toBe(200);
		expect(Array.isArray(response.data)).toBe(true);

		response.data.forEach((post) => {
			expect(post).toHaveProperty('userId');
			expect(post).toHaveProperty('id');
			expect(post).toHaveProperty('title');
			expect(post).toHaveProperty('body');

			expect(typeof post.userId).toBe('number');
			expect(typeof post.id).toBe('number');
			expect(typeof post.title).toBe('string');
			expect(typeof post.body).toBe('string');
		});
	});

	test('GET /posts/1, should return 1 post', async () => {
		const response = await axios.get(`${BASE_URL}/posts/1`);

		expect(response.status).toBe(200);

		expect(response.data).toHaveProperty('userId', 1);
		expect(response.data).toHaveProperty('id', 1);
		expect(response.data).toHaveProperty('title');
		expect(response.data).toHaveProperty('body');
		expect(typeof response.data.userId).toBe('number');
		expect(typeof response.data.id).toBe('number');
		expect(typeof response.data.title).toBe('string');
		expect(typeof response.data.body).toBe('string');
	});

	test('GET /users/1, should return 1 user', async () => {
		const response = await axios.get(`${BASE_URL}/users/1`);

		expect(response.status).toBe(200);

		expect(response.data).toHaveProperty('id', 1);
		expect(response.data).toHaveProperty('name');
		expect(response.data).toHaveProperty('email');
		expect(typeof response.data.id).toBe('number');
		expect(typeof response.data.name).toBe('string');
		expect(typeof response.data.email).toBe('string');
	});
});
