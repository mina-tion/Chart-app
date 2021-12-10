import React from 'react';
import classNames from 'classnames';
//components
// style
import styles from './styles.module.scss';

interface Props {
	keyd: number,
	type: string,
	currentChartType: string,
	handlerClick: any,
}

const SwitcherItem: React.FC<Props> = ({ keyd, handlerClick, type, currentChartType }) => {
	return (
		<li
			key={keyd}
			onClick={() => handlerClick(type)}
			className={classNames(
				styles.chartItem,
				type === currentChartType && styles.active
			)}
		>
			{type}
		</li>
	);
};


export default SwitcherItem;
