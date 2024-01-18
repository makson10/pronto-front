'use client';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';
import PasswordRequirementsHintButton from '@/components/PasswordRequirementsHint';
import ChangePasswordVisibilityButton from '@/components/ChangePasswordVisibilityButton';
import { LoginUser } from '@/types/userTypes';
import axios from 'axios';
import { getSession } from 'next-auth/react';

const formValidator = object({
	email: string().email('Email is not valid'),
	password: string()
		.min(8, 'Password is too short')
		.matches(
			/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim,
			'Password does not contain special characters'
		),
});

export default function LogInForm() {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	const sendLogInRequest = async (user: LoginUser) => {
		await axios.post('/api/login', { user });
	};

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={formValidator}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					console.log(values);
					sendLogInRequest(values);
					setSubmitting(false);
				}, 200);
			}}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<Form className="flex flex-col gap-10 w-1/4" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4">
						<div style={InputWrapperStyle}>
							<div style={PlaceholderWrapperStyle}>
								<label htmlFor="email" style={PlaceholderStyle}>
									Email
								</label>
								{errors.email && touched.email && (
									<p style={ErrorStyle}>{errors.email}</p>
								)}
							</div>
							<input
								id="email"
								name="email"
								type="email"
								style={InputStyle}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
						</div>

						<div style={InputWrapperStyle}>
							<div style={PlaceholderWrapperStyle}>
								<div style={PasswordPlaceholderWrapperStyle}>
									<label htmlFor="password" style={PlaceholderStyle}>
										Password
									</label>
									<PasswordRequirementsHintButton />
								</div>
								{errors.password && touched.password && (
									<p style={ErrorStyle}>{errors.password}</p>
								)}
							</div>
							<div className="flex flex-row gap-2">
								<input
									id="password"
									name="password"
									type={isPasswordVisible ? 'text' : 'password'}
									className="w-full"
									style={InputStyle}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
								<ChangePasswordVisibilityButton
									isPasswordVisible={isPasswordVisible}
									setIsPasswordVisible={setIsPasswordVisible}
								/>
							</div>
						</div>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						style={SubmitButtonStyle}>
						Sign up
					</button>
				</Form>
			)}
		</Formik>
	);
}

const InputWrapperStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: '.2rem',
};

const PlaceholderWrapperStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
};

const PasswordPlaceholderWrapperStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	gap: '.2rem',
};

const PlaceholderStyle: React.CSSProperties = {
	fontSize: '.8rem',
	color: 'grey',
	fontFamily: 'Tahoma',
};

const ErrorStyle: React.CSSProperties = {
	color: 'red',
	fontSize: '0.8rem',
};

const InputStyle: React.CSSProperties = {
	color: 'black',
	borderRadius: '6px',
	padding: '0.3rem',
};

const SubmitButtonStyle: React.CSSProperties = {
	backgroundColor: '#03C03C',
	borderRadius: '.4rem',
	padding: '0.5rem',
};
