import { object, ref, string } from 'yup';

export const signUpValidationScheme = object({
	firstName: string().min(2, 'Too short first name'),
	lastName: string().min(2, 'Too short last name'),
	email: string().email('Email is not valid'),
	password: string()
		.min(8, 'Password is too short')
		.matches(
			/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim,
			'Password does not contain special characters'
		),
});

export const logInValidationScheme = object({
	email: string().email('Email is not valid'),
	password: string()
		.min(8, 'Password is too short')
		.matches(
			/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim,
			'Password does not contain special characters'
		),
});

export const changePasswordValidationScheme = object({
	oldPassword: string(),
	newPassword: string()
		.min(8, 'Password is too short')
		.matches(
			/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim,
			'Password does not contain special characters'
		),
	confirmNewPassword: string().oneOf(
		[ref('newPassword')],
		'Password does not match'
	),
});
