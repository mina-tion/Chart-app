import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';

//components
import SwitcherItem from 'components/SwitcherItem';

// style
import styles from './styles.module.scss';

const ChartSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	return (
		<ul className={styles.chartList}>
			<SwitcherItem key={1} type={exchangeStore.candlestickChart.type} />
			<SwitcherItem key={2} type={exchangeStore.lineChart.type} />
		</ul>
	);
});

export default ChartSwitcher;
