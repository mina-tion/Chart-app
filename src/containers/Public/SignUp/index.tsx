import React from 'react';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, onSubmit } from 'utils/schema';

// style
import styles from './styles.module.scss';

const SingUp: React.FC = observer(() => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handlerChange = (e: any) => {
		e.target.value =
			e.target.value.charAt(0).toUpperCase() +
			e.target.value.substr(1).toLowerCase();
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>First name</p>
					<input
						{...register('firstName')}
						onChange={handlerChange}
						className={styles.inputField}
					/>
					<p className={styles.error}>{errors.firstName?.message}</p>
				</div>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>Surname</p>
					<input
						{...register('lastName')}
						onChange={handlerChange}
						className={styles.inputField}
					/>
					<p className={styles.error}>{errors.firstName?.message}</p>
				</div>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>Password</p>
					<input
						{...register('password')}
						type='password'
						className={styles.inputField}
					/>
					<p className={styles.error}>{errors.password?.message}</p>
				</div>

				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>Password Confirmation</p>
					<input
						{...register('passwordConfirmation')}
						type='password'
						className={styles.inputField}
					/>
					<p className={styles.error}>{errors.passwordConfirmation?.message}</p>
				</div>

				<input type='submit' value='Sign up' className={styles.submitButton} />
			</form>
		</div>
	);
});

export default SingUp;
