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
		console.log(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<p>First name</p>
			<input {...register('firstName')} onChange={() => handlerChange} />
			<p>{errors.firstName?.message}</p>

			<p>Surname</p>
			<input {...register('firstName')} onChange={() => handlerChange} />
			<p>{errors.firstName?.message}</p>

			<p>Password</p>
			<input
				{...register('password')}
				type='password'
				className={styles.password}
			/>
			<p>{errors.password?.message}</p>

			<p>Password Confirmation</p>
			<input
				{...register('passwordConfirmation')}
				type='password'
				className={styles.password}
			/>
			<p>{errors.passwordConfirmation?.message}</p>

			<input type='submit' />
		</form>
	);
});

export default SingUp;
