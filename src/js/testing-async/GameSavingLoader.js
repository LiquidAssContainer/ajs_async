import json from './parser';
import read from './reader';

export default class GameSavingLoader {
	static async load(data) {
		try {
			const dataPromise = await read(data);
			const jsonPromise = await json(dataPromise);
			return new GameSaving(jsonPromise);
		} catch (err) {
			return err;
		}
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
