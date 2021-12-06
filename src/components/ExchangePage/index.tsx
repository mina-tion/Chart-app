import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import Chart from 'components/Chart';

// style
import styles from './styles.module.scss';

//components
import ExchangePrice from 'components/ExchangePrice';

import TimePeriodSwitcher from 'components/TimePeriodSwitcher';
import ChartSwitcher from 'components/ChartSwitcher';

const ExchangePage: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>{exchangeStore.getCurrentPairTitle()}</h1>
				<ChartSwitcher />
				<TimePeriodSwitcher />
			</div>
			<ExchangePrice />
			<Chart />
		</>
	);
});

export default ExchangePage;
