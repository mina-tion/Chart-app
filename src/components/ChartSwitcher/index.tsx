import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import { useObserver } from 'mobx-react';

//components
import SwitcherItem from './switcherItem';
// style
import styles from './styles.module.scss';

const ChartSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	const handlerClick = (type: string) => {
		exchangeStore.setCurrentChartType(type);
	};

	return useObserver(() => (
		<ul className={styles.chartList}>
			<SwitcherItem
				keyd={1}
				type={exchangeStore.candlestickChart.type}
				currentChartType={exchangeStore.currentChartType}
				handlerClick={handlerClick}
			/>
			<SwitcherItem
				keyd={2}
				type={exchangeStore.lineChart.type}
				currentChartType={exchangeStore.currentChartType}
				handlerClick={handlerClick}
			/>
		</ul>
	));
});

export default ChartSwitcher;
