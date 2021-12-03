import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import classNames from 'classnames';
import Chart from 'components/Chart';

// style
import styles from './styles.module.scss';

//components
import ExchangePrice from 'components/ExchangePrice';

import TimePeriodSwitcher from 'components/TimePeriodSwitcher';

const ExchangePage: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	useEffect(() => {exchangeStore.fetchGraphData();}, [exchangeStore, exchangeStore.currentPairId]);

	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>{exchangeStore.getCurrentPairTitle()}</h1>
				ChartSwitcher
				<TimePeriodSwitcher />
			</div>

			<ExchangePrice />
			<div id='chart'>
				<Chart />
			</div>
		</>
	);
});

export default ExchangePage;
