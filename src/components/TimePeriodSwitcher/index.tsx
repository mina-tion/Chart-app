import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

const TimePeriodSwitcher: React.FC = observer(() => {
	const { exchangeStore } = useStore();
	useEffect(() => {}, [exchangeStore.currentPeriodId]);

	const handlerClick = (id: number) => {
		exchangeStore.setCurrentPeriodId(id);
	};

	return (
		<ul className={styles.periodList}>
			{exchangeStore.period.map((period: any) => (
				<li
					key={period.id}
					onClick={() => handlerClick(period.id)}
					className={classNames(
						styles.periodItem,
						exchangeStore.getCurrentPeriodId() === period.id
							? styles.active
							: ''
					)}
				>
					{exchangeStore.getFormatPeriodValue(period)}
				</li>
			))}
		</ul>
	);
});

export default TimePeriodSwitcher;
