import React from 'react';
import { observer } from 'mobx-react';

// style
import styles from './styles.module.scss';

import { brendIcons } from 'utils/brendIcons';

const BrendIcon: React.FC = () => {
	return (
		<div className={styles.iconContainer}>
			{brendIcons.map((icon, index) => (
				<img key={index} src={icon} className={styles.img} alt='brend' />
			))}
		</div>
	);
};

export default BrendIcon;
