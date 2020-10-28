import GameSavingLoader from './GameSavingLoader';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

GameSavingLoader.load(data).then((saving) => {
	console.log(saving);
}, (error) => {
	console.log(error);
});
