import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';

// style
import styles from './styles.module.scss';

//components
import PairList from './pairList';

const SiderContent: React.FC = observer(() => {
	const { exchangeStore } = useStore();

	const handlerClick = (id: number) => {
		exchangeStore.setCurrentPairId(id);
	};

	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.title}>Popular pairs</h2>
			<PairList
				pairs={exchangeStore.pairs}
				currentPairId={exchangeStore.currentPairId}
				handlerClick={handlerClick}
			/>
		</div>
	);
});

export default SiderContent;
