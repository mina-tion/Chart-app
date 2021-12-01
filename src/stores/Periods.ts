import { observable, action, makeObservable } from 'mobx';
import { autorun, set, toJS } from 'mobx';

export function autoSave(_this: any, name: string) {
	const storedJson = localStorage.getItem(name);
	if (storedJson) {
		set(_this, JSON.parse(storedJson));
	}
	autorun(() => {
		const value = toJS(_this);
		localStorage.setItem(name, JSON.stringify(value));
	});
}

class Store {
	public accessToken: string;

	constructor() {
		makeObservable(this);
		this.accessToken = '';
		autoSave(this, 'periodsStore');
	}

	@observable periods: Object[] = [
		{ id: 1, value: '3d' },
		{ id: 1, value: '7d' },
		{ id: 1, value: '14d' },
		{ id: 1, value: '1m' },
	];

	@observable currentPeriodId: number = 1;

	@action
	setCurrentPeriodId(id: number) {
		this.currentPeriodId = id;
	}
}

export default new Store();
