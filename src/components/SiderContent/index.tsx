import React from 'react';
import { observer } from 'mobx-react';

//components

// style
import styles from './styles.module.scss';
import SiderCard from 'components/SiderCard';


const cards = [ {id: 1, title: 'BTC - USD', priceText: '$6.574.75'},
				{id: 2, title: 'ETH - USD', priceText: '$223.60'},
				{id: 3, title: 'OMG - USD', priceText: '$3.47'},
				{id: 4, title: 'LTC - USD', priceText: '$58.47'},
				{id: 5, title: 'KNC - USD', priceText: '$11.10'},
				{id: 6, title: 'LSK - USD', priceText: '$3.30'},
				{id: 7, title: 'BCC - USD', priceText: '$25.17'},
				{id: 8, title: 'NEO - USD', priceText: '$6.574.75'},
]


const SiderContent: React.FC = observer(() => {
	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.title}>Popular pairs</h2>
			{cards.map((card)=><SiderCard title={card.title} priceText={card.priceText} />)}
		</div>
	);
});

export default SiderContent;
