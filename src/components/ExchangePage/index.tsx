import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

// style
import styles from './styles.module.scss';
import TimeBar from 'components/TimeBar';

const priceBlocks = [
	{ id: 1, caption: 'Last trade price', text: '0.00167200 ETH' },
	{ id: 2, caption: '24 hour price', text: '2.32%' },
	{ id: 3, caption: '24 hour volume', text: '42.738493 OMG' },
];

const ExchangePage: React.FC = observer(() => {
	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>ETH - OMG</h1>
				<TimeBar />
			</div>

			<div className={styles.priceContainer}>
				{priceBlocks.map((block) => (
					<div className={styles.priceColumn} key={block.id}>
						<h4 className={styles.caption}>{block.caption}</h4>
						<p className={classNames(styles.text, block.id%2===0?'green':'')}>{block.text}</p>
					</div>
				))}
			</div>

			<div>Chart</div>
		</>
	);
});

export default ExchangePage;
