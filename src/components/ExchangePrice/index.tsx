import React from 'react';
import classNames from 'classnames';
//components

// style
import styles from './styles.module.scss';

const priceBlocks = [
	{ id: 1, title: 'Last trade price', text: '0.00167200 ETH' },
	{ id: 2, title: '24 hour price', text: '2.32%' },
	{ id: 3, title: '24 hour volume', text: '42.738493 OMG' },
];

const ExchangePrice: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.priceListWrapper}>
				{priceBlocks.map((block) => (
					<div className={styles.priceItem} key={block.id}>
						<h4 className={styles.title}>{block.title}</h4>
						<p
							className={classNames(
								styles.text,
								block.id % 2 === 0 ? styles.green : ''
							)}
						>
							{block.text}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExchangePrice;
