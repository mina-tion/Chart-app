import React from 'react';
import { observer } from 'mobx-react';

// style
import styles from './styles.module.scss';

// images
import brendArrowTop from 'sources/images/brendArrowTop.svg';
import brendArrowMiddle from 'sources/images/brendArrowMiddle.svg';
import brendArrowBottom from 'sources/images/brendArrowBottom.svg';

const BrendIcon: React.FC = observer(() => {
	return (
		<div className={styles.iconContainer}>
			<img className={styles.img} src={brendArrowTop} alt='' />
			<img className={styles.img} src={brendArrowMiddle} alt='' />
			<img className={styles.img} src={brendArrowBottom} alt='' />
		</div>
	);
});

export default BrendIcon;
