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
		autoSave(this, 'currencyPairsStore');
	}

	//_________________________________________________________________________

	@observable currentPairId: number = 1;
	@observable currentPeriodId: number = 1;
	@observable pairs: { id: number; title: string }[] = [
		{ id: 1, title: 'BTC - USD' },
		{ id: 2, title: 'ETH - USD' },
		{ id: 3, title: 'OMG - USD' },
		{ id: 4, title: 'LTC - USD' },
		{ id: 5, title: 'KNC - USD' },
	];

	@observable periods: { id: number; value: string }[] = [
		{ id: 1, value: '3d' },
		{ id: 2, value: '7d' },
		{ id: 3, value: '14d' },
		{ id: 4, value: '1m' },
	];

	@observable graphData: [] = [];
	@observable graphDataStatus: string = 'pending';

	@action
	fetchGraphData() {
		this.graphData = [];
		this.graphDataStatus = 'pending'

		fetchGraphData(this.getCurrentPair(), 'dg', 'ffg').then(
			action('fetchSuccess', (response: Response) => {
				const filteredProjects = response.json();
				console.log(filteredProjects);
				this.graphDataStatus = 'done';
			}),
			action('fetchError', (error: {}) => {
				this.graphDataStatus = 'error';
			})
		);
	}
	//_________________________________________________________________________

	@action
	setCurrentPeriodId(id: number) {
		this.currentPeriodId = id;
	}

	@action
	setCurrentPairId(id: number) {
		this.currentPairId = id;
	}

	@action
	getCurrentPairId() {
		return this.currentPairId;
	}

	@action
	getCurrentPeriodId() {
		return this.currentPeriodId;
	}


	@action
	getCurrentPair() {
		let title: string = '';
		this.pairs.forEach((pair) => {
			if (pair.id === this.currentPairId) title = pair.title;
		});
		return title;
	}

	//_________________________________________________________________________
}

export default new Store();

const fetchGraphData = (
	curPair: string,
	startPeriod: string,
	endPeriod: string
) => {
	curPair = curPair.split(' ').join('');
	return fetch(
		`https://api.pro.coinbase.com/products/${curPair}/candles?granularity=3600&start=2021-11-28T12:29:18&end=2021-12-01T12:29:18`
	);
};