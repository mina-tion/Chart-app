import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

//components

// style
import styles from './styles.module.scss';

// utils
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
			{exchangeStore.pairs.map((pair) => (
				<li
					key={pair.id}
					onClick={() => handlerClick(pair.id)}
					className={classNames(
						styles.cardWrapper,
						exchangeStore.getCurrentPairId() === pair.id ? styles.active : ''
					)}
				>
					{pair.title}
				</li>
			))}
		</div>
	);
});

export default SiderContent;
