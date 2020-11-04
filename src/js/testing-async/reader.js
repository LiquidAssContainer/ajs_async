export default function read(data) {
	// пробовал и это на async/await написать, но не вышло (да и не надо)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return ((input) => {
				const buffer = new ArrayBuffer(input.length * 2);
				const bufferView = new Uint16Array(buffer);
				for (let i = 0; i < input.length; i += 1) {
					bufferView[i] = input.charCodeAt(i);
				}
				resolve(buffer);
			})(data);
		}, 1000);
	});
}
