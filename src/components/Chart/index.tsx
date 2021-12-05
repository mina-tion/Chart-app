import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Chart from 'react-apexcharts';

import { useStore } from 'stores';
//components

import { setOptions } from 'utils/chartOptions';

const ChartS: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	useEffect(
		() => exchangeStore.fetchGraphData(),
		[
			exchangeStore,
			exchangeStore.currentPairId,
			exchangeStore.currentPeriodId,
			exchangeStore.currentChartId,
		]
	);
	let chartType: any =
		exchangeStore.charts[exchangeStore.getCurrentChartId() - 1].type;
	const series: any = [
		{
			name: chartType,
			data: exchangeStore.charts[exchangeStore.getCurrentChartId() - 1].data,
		},
	];

	const options: any = setOptions(chartType);

	return (
		<div id='chart'>
			<Chart options={options} series={series} type={chartType} height={400} />
		</div>
	);
});

export default ChartS;
