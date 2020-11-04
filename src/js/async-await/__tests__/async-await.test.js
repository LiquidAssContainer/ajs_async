import GameSavingLoader from '../GameSavingLoader';

test('Test load()', async () => {
	const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
	const loadedData = await GameSavingLoader.load(data);
	expect(loadedData).toEqual({
		created: 1546300800,
		id: 9,
		userInfo: {
			id: 1,
			level: 10,
			name: 'Hitman',
			points: 2000,
		},
	});
});

test('Test error', async () => {
	const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
	try {
		const loadedData = await GameSavingLoader.load(data);
	} catch (e) {
		expect(e).toEqual(Error('Невалидный JSON'));
	}
});
