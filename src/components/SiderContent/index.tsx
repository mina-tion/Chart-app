import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

//components

// style
import styles from './styles.module.scss';

// utils
//import { cards } from 'utils/cards';
import classNames from 'classnames';
import { useStore } from 'stores';

const SiderContent: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	useEffect(() => {}, [exchangeStore.currentPairId]);

	const handlerClick = (id: number) => {
		exchangeStore.setCurrentPairId(id);
	};

	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.title}>Popular pairs</h2>
			{exchangeStore.pairs.map((card) => (
				<li
					key={card.id}
					onClick={() => handlerClick(card.id)}
					className={classNames(
						styles.cardWrapper,
						exchangeStore.getCurrentPairId() === card.id ? styles.active : ''
					)}
				>
					{card.title}
				</li>
			))}
		</div>
	);
});

export default SiderContent;
