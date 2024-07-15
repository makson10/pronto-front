'use client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import PasswordRequirementsHint from '@/components/PasswordRequirementsHint';
import ChangePasswordVisibilityButton from '@/components/ChangePasswordVisibilityButton';
import { SignUpUser } from '@/types/user';
import usePageNavigation from '@/hooks/usePageNavigation';
import { getAndStoreUser } from '@/context/storeUtils';
import { signUpValidationScheme } from '@/assets/validationScheme';
import { ShowMessageBox } from '@/components/MessageBox';
import axios from 'axios';
import style from '@/styles/authorizeForm.module.scss';
import Link from 'next/link';

const SignUpForm = () => {
	const { goToHomePage } = usePageNavigation();
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [errorMessageText, setErrorMessageText] = useState<string>('fuck');
	const [needToShowErrorMessage, setNeedToShowErrorMessage] =
		useState<boolean>(false);

	const {
		values,
		errors,
		touched,
		handleSubmit,
		handleBlur,
		handleChange,
		isSubmitting,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		validationSchema: signUpValidationScheme,
		onSubmit: (values, { setSubmitting }) => {
			setTimeout(async () => {
				await signUpUser(values);
				setSubmitting(false);
			}, 200);
		},
	});

	useEffect(() => {
		if (!needToShowErrorMessage) return;

		setTimeout(() => {
			setNeedToShowErrorMessage(false);
		}, 4000);
	}, [needToShowErrorMessage]);

	const signUpUser = async (user: SignUpUser) => {
		try {
			await axios.post('/api/signup', { user });
			await getAndStoreUser();
			goToHomePage();
		} catch (error: any) {
			setErrorMessageText(error.response.data);
			setNeedToShowErrorMessage(true);
		}
	};

	return (
		<>
			{needToShowErrorMessage && (
				<ShowMessageBox message={errorMessageText} isError={true} />
			)}

			<form className="flex flex-col gap-8" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row justify-between gap-12">
						<div className={style['inputWrapper']}>
							<div className={style['placeholderWrapper']}>
								<label htmlFor="firstName" className={style['placeholder']}>
									First Name
								</label>
								{errors.firstName && touched.firstName && (
									<p className={style['error']}>{errors.firstName}</p>
								)}
							</div>
							<input
								id="firstName"
								name="firstName"
								type="text"
								className={style['input']}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.firstName}
							/>
						</div>

						<div className={style['inputWrapper']}>
							<div className={style['placeholderWrapper']}>
								<label htmlFor="lastName" className={style['placeholder']}>
									Last Name
								</label>
								{errors.lastName && touched.lastName && (
									<p className={style['error']}>{errors.lastName}</p>
								)}
							</div>
							<input
								id="lastName"
								name="lastName"
								type="text"
								className={style['input']}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.lastName}
							/>
						</div>
					</div>

					<div className={style['inputWrapper']}>
						<div className={style['placeholderWrapper']}>
							<label htmlFor="email" className={style['placeholder']}>
								Email
							</label>
							{errors.email && touched.email && (
								<p className={style['error']}>{errors.email}</p>
							)}
						</div>
						<input
							id="email"
							name="email"
							type="email"
							className={style['input']}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
					</div>

					<div className={style['inputWrapper']}>
						<div className={style['placeholderWrapper']}>
							<div className={style['passwordPlaceholderWrapper']}>
								<label htmlFor="password" className={style['placeholder']}>
									Password
								</label>
								<PasswordRequirementsHint />
							</div>
							{errors.password && touched.password && (
								<p className={style['error']}>{errors.password}</p>
							)}
						</div>
						<div className="flex flex-row gap-2">
							<input
								id="password"
								name="password"
								type={isPasswordVisible ? 'text' : 'password'}
								className={style['input']}
								style={{ width: '100%' }}
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
					<div className="flex flex-row justify-end">
						<button className="text-sm text-gray-500 transition hover:text-white">
							<Link href={'/login'}>Already signed up? Log in →</Link>
						</button>
					</div>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className={style['submitButton']}>
					Sign up
				</button>
			</form>
		</>
	);
};

export default SignUpForm;
