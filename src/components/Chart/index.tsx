import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import classNames from 'classnames';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';
// style
import styles from './styles.module.scss';
//components
import { useStore } from 'stores';
interface Props {}
const ChartS: React.FC<Props> = observer(() => {
	const { exchangeStore } = useStore();
	useEffect(
		() => exchangeStore.fetchGraphData(),
		[exchangeStore, exchangeStore.currentPairId, exchangeStore.currentPeriodId,  exchangeStore.currentChartId]
	);
	console.log('data ', exchangeStore.charts[exchangeStore.getCurrentChartId()]);


	////////////////////////////////////////////////////////////
	
	let chartType:any = exchangeStore.charts[exchangeStore.getCurrentChartId()-1].type	


	/////////////////////////////////////////////////////////////
	const series = [
		{
			name: chartType,
			data: exchangeStore.charts[exchangeStore.getCurrentChartId()-1].data
		},
	];

	let options: any = {
		chart: {
			height: 350,
			type: chartType,
		},
		title: {
			text: '',
			align: 'left',
		},
		annotations: {
			xaxis: [
				{
					x: 'Oct 06 14:00',
					borderColor: '#00E396',
					label: {
						borderColor: '#00E396',
						style: {
							fontSize: '12px',
							color: '#fff',
							background: '#00E396',
						},
						orientation: 'horizontal',
						offsetY: 7,
						text: 'Annotation Test',
					},
				},
			],
		},
		tooltip: {
			enabled: true,
		},
		xaxis: {
			type: 'category',
			labels: {
				formatter: function (val: any) {
					return dayjs(val).format('MMM DD HH:mm');
				},
			},
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
		<>
			<div id='chart'>
				<Chart
					options={options}
					series={series}
					type={chartType}
					height={400}
				/>
			</div>
		</>
	);
});

export default ChartS;

/* 
const series = [
	{
		name: 'candle',
		data: exchangeStore.charts[0].data
	},
]; */
/* 
let options: any = {
	chart: {
		height: 350,
		type: 'candlestick',
	},
	title: {
		text: '',
		align: 'left',
	},
	annotations: {
		xaxis: [
			{
				x: 'Oct 06 14:00',
				borderColor: '#00E396',
				label: {
					borderColor: '#00E396',
					style: {
						fontSize: '12px',
						color: '#fff',
						background: '#00E396',
					},
					orientation: 'horizontal',
					offsetY: 7,
					text: 'Annotation Test',
				},
			},
		],
	},
	tooltip: {
		enabled: true,
	},
	xaxis: {
		type: 'category',
		labels: {
			formatter: function (val: any) {
				return dayjs(val).format('MMM DD HH:mm');
			},
		},
	},
	yaxis: {
		tooltip: {
			enabled: true,
		},
	},
}; */