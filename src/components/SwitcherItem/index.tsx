import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useObserver } from 'mobx-react-lite';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

interface Props {
	key: number;
	type: string;
}

const SwitcherItem: React.FC<Props> = ({ type, key }) => {
	const { exchangeStore } = useStore();

	return useObserver(() => (
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
	));
};

export default SwitcherItem;
