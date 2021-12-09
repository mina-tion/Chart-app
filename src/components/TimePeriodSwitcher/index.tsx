import React from 'react';
import { useObserver } from 'mobx-react-lite';
import classNames from 'classnames';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

const TimePeriodSwitcher: React.FC = () => {
	const { exchangeStore } = useStore();

	return useObserver(() => (
		<ul className={styles.periodList}>
			{exchangeStore.period.map((period: any) => (
				<li
					key={period.id}
					onClick={() => exchangeStore.setCurrentPeriodId(period.id)}
					className={classNames(
						styles.periodItem,
						exchangeStore.currentPeriodId === period.id && styles.active
					)}
				>
					{period.value + period.unit.slice(0, 1)}
				</li>
			))}
		</ul>
	));
};

export default TimePeriodSwitcher;
