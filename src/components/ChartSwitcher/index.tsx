import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import { useObserver } from 'mobx-react-lite';

//components
import SwitcherItem from 'components/SwitcherItem';

// style
import styles from './styles.module.scss';

const ChartSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	return useObserver(() => (
		<ul className={styles.chartList}>
			<SwitcherItem keyd={1} type={exchangeStore.candlestickChart.type} />
			<SwitcherItem keyd={2} type={exchangeStore.lineChart.type} />
		</ul>
	));
});

export default ChartSwitcher;
