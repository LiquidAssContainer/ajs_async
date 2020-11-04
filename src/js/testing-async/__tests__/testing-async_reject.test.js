import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

test('Testing reject', async () => {
	read.mockReturnValue(Promise.reject(new Error('Что-то пошло не так в функции read!')));
	const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
	try {
		const loadedData = await GameSavingLoader.load(data);
	} catch (e) {
		expect(e).toEqual(Error('Что-то пошло не так в функции read!'));
	}
});
