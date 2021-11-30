

import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
//components

// style
import styles from './styles.module.scss';

const TimeBar: React.FC = observer(() => {
	return (
		<div className={styles.timeBar}>
			<p className={styles.timeItem}>1d</p>
			<p className={classNames(styles.timeItem, styles.active)}>6h</p>
			<p className={styles.timeItem}>1h</p>
			<p className={styles.timeItem}>30m</p>
			<p className={styles.timeItem}>5m</p>
		</div>
	);
});

export default TimeBar;