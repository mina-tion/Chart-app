import React from 'react';
// style
import styles from './styles.module.scss';

// components

const ProfileInfo: React.FC = () => {
	return (
		<div className={styles.profileInfoContainer}>
			<h2 className={styles.usernameText}>Kamil Bachabek</h2>
			<h3 className={styles.verificationText}>ACCOUNT VERFIED</h3>
		</div>
	);
};

export default ProfileInfo;
