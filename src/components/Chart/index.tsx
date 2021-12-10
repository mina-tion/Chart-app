import React from 'react';
import { observer } from 'mobx-react';
import Chart from 'react-apexcharts';
import { useStore } from 'stores';
//components

import { setOptions } from 'utils/chartOptions';

const ChartS: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	const type: any = exchangeStore.currentChartType;
	const series: any = [
		{
			name: type,
			data: exchangeStore.candlestickChart.data,
		},
	];
	const options: any = setOptions(type);

	return (
		<div id='chart'>
			<Chart options={options} series={series} type={type} height={400} />
		</div>
	);
});

export default ChartS;
