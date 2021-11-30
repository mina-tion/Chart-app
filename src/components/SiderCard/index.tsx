import React from 'react';
import { observer } from 'mobx-react';

//components

// style
import styles from './styles.module.scss';

interface Props {
	title: string;
	priceText: string;
}

const SiderCard: React.FC<Props> = observer(({ title, priceText }) => {
	return (
		<div className={styles.cardWrapper}>
			<h2 className={styles.cardTitle}>{title}</h2>
			<p className={styles.text}>{priceText}</p>
		</div>
	);
});

export default SiderCard;
