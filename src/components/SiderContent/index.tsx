import React from 'react';
import { observer } from 'mobx-react';

//components

// style
import styles from './styles.module.scss';
import SiderCard from 'components/SiderCard';

// utils
import { cards } from 'utils/cards';

const SiderContent: React.FC = observer(() => {
	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.title}>Popular pairs</h2>
			{cards.map((card) => (
				<SiderCard title={card.title} priceText={card.priceText} />
			))}
		</div>
	);
});

export default SiderContent;
