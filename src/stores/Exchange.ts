import { observable, action, makeObservable } from 'mobx';
import { autorun, set, toJS } from 'mobx';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

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

	@observable period: { id: number; value: string; unit: string }[] = [
		{ id: 1, value: '3', unit: 'days' },
		{ id: 2, value: '7', unit: 'days' },
		{ id: 3, value: '14', unit: 'days' },
		{ id: 4, value: '1', unit: 'month' },
	];

	@observable graphData: [] = [];
	@observable graphDataStatus: string = 'pending';

	@action
	fetchGraphData() {
		this.graphData = [];
		this.graphDataStatus = 'pending';

		fetchData(
			this.getCurrentPairTitle(),
			getStartDate(this.getCurrentPeriod().value, this.getCurrentPeriod().unit),
			getEndDate()
		).then(
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
	getFormatPeriodValue(period: { id: number; value: string; unit: string }) {
		return period!.value + period!.unit.slice(0, 1);
	}

	@action
	getCurrentPeriod() {
		return this.period.find((period) =>
			period.id === this.currentPeriodId ? true : false
		)!;
	}

	@action
	getCurrentPairTitle() {
		return this.pairs.find((pair) =>
			pair.id === this.currentPairId ? true : false
		)?.title;
	}

	//_________________________________________________________________________
}

export default new Store();

const fetchData = (curPair: any, startDate: any, endDate: any) => {
	curPair = curPair.split(' ').join('');
	return fetch(
		`https://api.pro.coinbase.com/products/${curPair}/candles?granularity=3600&start=${startDate}&end=${endDate}`
	);
};

const getEndDate = () => {
	dayjs.extend(utc);
	return dayjs().utc().format();
};
const getStartDate = (value: string, unit: string) => {
	dayjs.extend(utc);
	return dayjs().subtract(Number(value), unit).utc().format();
};
