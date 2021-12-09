import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

const TimePeriodSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	return (
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
	);
});

export default TimePeriodSwitcher;
