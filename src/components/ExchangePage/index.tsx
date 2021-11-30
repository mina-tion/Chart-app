import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

// style
import styles from './styles.module.scss';

//components
import ExchangePrice from 'components/ExchangePrice'

import TimeBar from 'components/TimeBar';

const ExchangePage: React.FC = observer(() => {
	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>ETH - OMG</h1>
				<TimeBar />
			</div>

			<ExchangePrice />

			<div>Chart</div>
		</>
	);
});

export default ExchangePage;
