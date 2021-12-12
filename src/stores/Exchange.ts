import { observable, action, makeObservable } from 'mobx';
import { periods } from 'utils/periods';
import { currencyPairs } from 'utils/currencyPairs';
import { candlestickChart, lineChart } from 'utils/chartTypes';
import { api } from 'config';
import { getStartDate, getEndDate } from 'utils/const';

class Store {
	constructor() {
		makeObservable(this);
	}
	//charts
	@observable candlestickChart: any = candlestickChart;
	@observable lineChart: any = lineChart;
	@observable currentChartType: string = candlestickChart.type;

	//currency pairs
	@observable currentPairId: number = 1;
	@observable pairs: { id: number; title: string }[] = currencyPairs;

	//time periods
	@observable currentPeriodId: number = 1;
	@observable period: any = periods;

	//_________________________________________________________________________

	//currency pairs
	@action
	setCurrentPairId(id: number) {
		this.currentPairId = id;
		this.fetchGraphData();
	}

	// periods
	@action
	setCurrentPeriodId(id: number) {
		this.currentPeriodId = id;
		this.fetchGraphData();
	}

	//charts
	@action
	setCurrentChartType(type: string) {
		this.currentChartType = type;
		this.fetchGraphData();
	}

	getCurrentPairTitle() {
		return this.pairs.find((pair) =>
			pair.id === this.currentPairId
		)?.title;
	}

	@action
	async fetchGraphData() {
		const curPair = this.getCurrentPairTitle()!.split(' ').join('');
		const granularity = this.period.find(
			(period: any) => period.id === this.currentPeriodId
		).granularity;
		const startDate = getStartDate(
			this.period.find((period: any) => period.id === this.currentPeriodId)
				.value,
			this.period.find((period: any) => period.id === this.currentPeriodId).unit
		);
		const endDate = getEndDate();

		const res = await api.get(
			`/products/${curPair}
			/candles?granularity=${granularity}&start=${startDate}&end=${endDate}`
		);

		this.candlestickChart.data = res.data.map((item: any, index: number) => {
			return {
				x: new Date(item[0] * 1000),
				y: [item[3], item[2], item[1], item[4]],
			};
		});

		this.lineChart.data = res.data.map((item: any, index: number) => {
			return {
				x: new Date(item[0] * 1000),
				y: item[4],
			};
		});
	}
}

export default new Store();
