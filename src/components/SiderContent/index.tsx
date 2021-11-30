import React from 'react';
import { observer } from 'mobx-react';

//components

// style
import styles from './styles.module.scss';


const SiderContent: React.FC = observer(() => {
	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.title}>Popular pairs</h2>
		</div>
	);
});

export default SiderContent;
