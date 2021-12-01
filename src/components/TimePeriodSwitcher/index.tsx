import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';


const TimePeriodSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	useEffect(() => {}, [exchangeStore.currentPairId]);
	const handlerClick = (id: number) => {
		exchangeStore.setCurrentPeriodId(id);
	};

	return (
		<ul className={styles.periodList}>
			{exchangeStore.periods.map((period) => (
				<li
					key={period.id}
					onClick={() => handlerClick(period.id)}
					className={classNames(
						styles.periodItem,
						exchangeStore.getCurrentPeriodId() === period.id ? styles.active : ''
					)}
				>
					{period.value}
				</li>
			))}
		</ul>
	);
});

export default TimePeriodSwitcher;
