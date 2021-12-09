import React from 'react';
import classNames from 'classnames';
import { useObserver } from 'mobx-react-lite';
//components

import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

interface Props {
	keyd: number;
	type: string;
}

const SwitcherItem: React.FC<Props> = ({ type, keyd }) => {
	const { exchangeStore } = useStore();

	return useObserver(() => (
		<li
			key={keyd}
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
