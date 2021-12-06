import React from 'react';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GoogleLogin from 'react-google-login';

// style
import styles from './styles.module.scss';

import { schema, onSubmit } from 'utils/schema';

const SingIn: React.FC = observer(() => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const responseGoogle = (response: any) => {
		console.log(response);
	};

	return (
		<div className={styles.signInContainer}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>E-mail</p>
					<input {...register('email')} className={styles.inputField} />
					<p className={styles.error}>{errors.email?.message}</p>
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

				<input type='submit' value='Sign in' className={styles.submitButton} />
			</form>

			<div className={styles.googleButton}>
				<GoogleLogin
					clientId='1094878947480-gqprqhjnhbt3m5b5igu5nton88da8gdd.apps.googleusercontent.com'
					buttonText='Sign in with google'
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy='single_host_origin'
				/>
			</div>
		</div>
	);
});

export default SingIn;
