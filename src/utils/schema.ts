import * as yup from 'yup';

export const schema = yup
	.object({
		firstName: yup
			.string()
			.uppercase()
			//.transform((value) => (!value ? null : value.toUpperCase()))
			.required('No first name provided')
			.min(2, 'First name is too short - should be 2 chars minimum.'),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
		password: yup
			.string()
			.required('Password is required')
			.min(8, 'Password is too short - should be 8 chars minimum.')
			.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})
	.required();
