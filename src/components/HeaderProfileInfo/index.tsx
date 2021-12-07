import React from 'react';
import { logout } from 'utils/login';
// style
import styles from './styles.module.scss';

// components

const ProfileInfo: React.FC = () => {
	const handlerClick = () => { 
		logout();
	}

	return (
		<div className={styles.profileInfoContainer}>
			<h2 className={styles.usernameText}>Kamil Bachabek</h2>
			<h3 className={styles.verificationText}>ACCOUNT VERFIED</h3>
			<a className={styles.button} href='' onClick={handlerClick}>Logout</a>
		</div>
	);
};

export default ProfileInfo;
