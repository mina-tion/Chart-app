import { observable, action, makeObservable } from 'mobx';
import { autorun, set, toJS } from 'mobx';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { log } from 'console';
import { periods } from 'utils/periods';

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
		console.log(this.period)
	}

	//charts
	@observable chartData: [] = [];
	@observable chartDataStatus: string = 'pending';

	//currency pairs
	@observable currentPairId: number = 1;
	@observable pairs: { id: number; title: string }[] = [
		{ id: 1, title: 'BTC - USD' },
		{ id: 2, title: 'ETH - USD' },
		{ id: 3, title: 'AGLD-USDT' },
		{ id: 4, title: 'LTC - USD' },
		{ id: 5, title: 'KNC - USD' },
	];

	//time periods
	@observable currentPeriodId: number = 1;
	@observable period: {
		id: number;
		value: string;
		unit: string;
		granularity: string;
	}[] = periods;

	//_________________________________________________________________________

	//currency pairs
	@action
	setCurrentPairId(id: number) {
		this.currentPairId = id;
	}

	@action
	getCurrentPairId() {
		return this.currentPairId;
	}

	@action
	getCurrentPairTitle() {
		return this.pairs.find((pair) =>
			pair.id === this.currentPairId ? true : false
		)?.title;
	}

	//currency periods
	@action
	setCurrentPeriodId(id: number) {
		this.currentPeriodId = id;
	}

	@action
	getCurrentPeriodId() {
		return this.currentPeriodId;
	}

	@action
	getFormatPeriodValue(per: { id: number; value: string; unit: string }) {
		return per.value + per.unit.slice(0, 1);
	}

	@action
	getCurrentPeriod() {
		return this.period.find((period) =>
			period.id === this.currentPeriodId ? true : false
		)!;
	}

	@action
	fetchGraphData() {
		this.chartData = [];
		this.chartDataStatus = 'pending';
		//console.log(this.getCurrentPeriod().unit)
		fetchData(
			this.getCurrentPairTitle(),
			getStartDate(this.getCurrentPeriod().value, this.getCurrentPeriod().unit),
			getEndDate(),
			this.getCurrentPeriod().granularity
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return data.map((item: any, index: number) => {
					return {
						x: new Date(item[0] * 1000),
						y: [item[3], item[2], item[1], item[4]],
					};
				});
			})
			.then((chartData) => {
				this.chartData = chartData;
				this.chartDataStatus = 'done';
			})
			.catch((e) => {
				this.chartDataStatus = 'error';
				console.log(e);
			});
	}
}

export default new Store();

const fetchData = (
	curPair: any,
	startDate: any,
	endDate: any,
	granularity: string
) => {
	console.log('granularity', granularity);
	return fetch(
		`https://api.pro.coinbase.com/products/${curPair
			.split(' ')
			.join(
				''
			)}/candles?granularity=${granularity}&start=${startDate}&end=${endDate}`
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
