import json from './parser';
import read from './reader';

export default class GameSavingLoader {
	static load(data) {
		return new Promise((resolve, reject) => {
			const dataPromise = read(data);
			dataPromise.then((data) => {
				const jsonPromise = json(data);
				jsonPromise.then((response) => {
					try {
						let saving = new GameSaving(response);
						resolve(saving);
					} catch (e) {
						reject(e);
					}
				});
			});
		});
	}
}

export class GameSaving {
	constructor(json) {
		try {
			let obj = JSON.parse(json);
			for (let prop in obj) {
				this[prop] = obj[prop];
			}
		} catch {
			throw new Error('Невалидный JSON');
		}
	}
}
