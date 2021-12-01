import React from 'react';
import { observer } from 'mobx-react';
//import { useStore } from 'stores';

// style
import styles from './styles.module.scss';

const SingIn: React.FC = observer(() => {
	//const { postsStore } = useStore();

	return (
		<div className={styles.signIn}>
			{/* Sign In <span>{postsStore.foo}</span> */}
		</div>
	);
});

export default SingIn;
