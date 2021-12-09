import React from 'react';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GoogleLogin from 'react-google-login';
import { login } from 'utils/login';
// style
import styles from './styles.module.scss';
import { useStore } from 'stores';
import { schema, onSubmit } from 'utils/schema';
import { useHistory } from 'react-router';

interface Props { 
	register: any,
	type: string, 
	title: string, 
	name: string,
	errMessage: string,
	onChange: any
}

const InputField: React.FC<Props> = observer(({register, type, name, title, errMessage, onChange}) => {

	return (
		<div className={styles.inputContainer}>
			<p className={styles.inputTitle}>{title}</p>
			<input {...register(name)} className={styles.inputField} type={type} onChange={onChange}/>
			<p className={styles.error}>{errMessage}</p>
		</div>
	);
});

export default InputField;
