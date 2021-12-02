import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import Chart from 'components/Chart';
import classNames from 'classnames';

// style
import styles from './styles.module.scss';

//components
import ExchangePrice from 'components/ExchangePrice';

import TimePeriodSwitcher from 'components/TimePeriodSwitcher';

const ExchangePage: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	exchangeStore.fetchGraphData();

	useEffect(() => {}, [exchangeStore.currentPairId]);

	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>{exchangeStore.getCurrentPairTitle()}</h1>
				<TimePeriodSwitcher />
			</div>

			<ExchangePrice />
		</>
	);
});

export default ExchangePage;
