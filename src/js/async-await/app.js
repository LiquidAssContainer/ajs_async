import GameSavingLoader from './GameSavingLoader';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

(async () => {
	try {
		let saving = await GameSavingLoader.load(data);
		console.log(saving);
	} catch (e) {
		console.log(e);
	}
})(data);
