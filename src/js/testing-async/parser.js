export default function json(data) {
	// пробовал и это на async/await написать, но не вышло (да и не надо)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
		}, 500);
	});
}
