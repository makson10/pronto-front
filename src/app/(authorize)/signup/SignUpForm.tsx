'use client';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import PasswordRequirementsHintButton from '@/components/PasswordRequirementsHint';
import ChangePasswordVisibilityButton from '@/components/ChangePasswordVisibilityButton';
import { SignUpUser } from '@/types/userTypes';
import usePageNavigation from '@/hooks/usePageNavigation';
import { getAndStoreUser } from '@/context/storeUtils';
import { signUpValidationScheme } from '@/assets/validationScheme';
import axios from 'axios';

export default function SignUpForm() {
	const { goToHomePage } = usePageNavigation();
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	const sendSignUpRequest = async (user: SignUpUser) => {
		await axios.post('/api/signup', { user });
		await getAndStoreUser();
	};

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			}}
			validationSchema={signUpValidationScheme}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(async () => {
					console.log(values);
					await sendSignUpRequest(values);
					goToHomePage();
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
				<Form className="flex flex-col gap-10" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4">
						<div className="flex flex-row justify-between gap-12">
							<div style={InputWrapperStyle}>
								<div style={PlaceholderWrapperStyle}>
									<label htmlFor="firstName" style={PlaceholderStyle}>
										First Name
									</label>
									{errors.firstName && touched.firstName && (
										<p style={ErrorStyle}>{errors.firstName}</p>
									)}
								</div>
								<input
									id="firstName"
									name="firstName"
									type="text"
									style={InputStyle}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
								/>
							</div>

							<div style={InputWrapperStyle}>
								<div style={PlaceholderWrapperStyle}>
									<label htmlFor="lastName" style={PlaceholderStyle}>
										Last Name
									</label>
									{errors.lastName && touched.lastName && (
										<p style={ErrorStyle}>{errors.lastName}</p>
									)}
								</div>
								<input
									id="lastName"
									name="lastName"
									type="text"
									style={InputStyle}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}
								/>
							</div>
						</div>

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
