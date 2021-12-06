import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

const ChartSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	console.log(exchangeStore.charts);

	const handlerClick = (id: number) => {
		exchangeStore.setCurrentChartId(id);
	};

	useEffect(
		() => exchangeStore.fetchGraphData(),
		[
			exchangeStore,
			exchangeStore.currentPairId,
			exchangeStore.currentPeriodId,
			exchangeStore.currentChartId,
		]
	);

	return (
		<ul className={styles.chartList}>
			{exchangeStore.charts.map((chartType: any) => (
				<li
					key={chartType.id}
					onClick={() => handlerClick(chartType.id)}
					className={classNames(
						styles.chartItem,
						exchangeStore.getCurrentChartId() === chartType.id
							? styles.active
							: ''
					)}
				>
					{chartType.type}
				</li>
			))}
		</ul>
	);
});

export default ChartSwitcher;
