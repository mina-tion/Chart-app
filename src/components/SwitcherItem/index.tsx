import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

interface Props {
	key: number;
	type: string;
}

const SwitcherItem: React.FC<Props> = observer(({ type, key }) => {
	const { exchangeStore } = useStore();

	return (
		<li
			key={key}
			onClick={() => exchangeStore.setCurrentChartType(type)}
			className={classNames(
				styles.chartItem,
				type === exchangeStore.currentChartType && styles.active
			)}
		>
			{type}
		</li>
	);
});

export default SwitcherItem;
