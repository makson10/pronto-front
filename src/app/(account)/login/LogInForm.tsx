'use client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import PasswordRequirementsHint from '@/components/common/PasswordRequirementsHint';
import ChangePasswordVisibilityButton from '@/components/common/ChangePasswordVisibilityButton';
import { LoginUser } from '@/types/user';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { logInValidationScheme } from '@/assets/validationScheme';
import { ShowMessageBox } from '@/components/common/MessageBox';
import style from '@/styles/authorizeForm.module.scss';
import { useAppDispatch } from '@/store/hooks';
import axios from 'axios';
import { setUser } from '@/store/user/userSlice';

const LogInForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
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
			email: '',
			password: '',
		},
		validationSchema: logInValidationScheme,
		onSubmit: (values, { setSubmitting }) => {
			setTimeout(async () => {
				await logInUser(values);
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

	const logInUser = async (user: LoginUser) => {
		try {
			const res = await axios.post('/api/login', { user });

			if (!res.data.okay) {
				throw new Error('Error during login');
			}

			router.push('/');
			dispatch(setUser(res.data.user));
			router.refresh();
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

			<form className="flex flex-col gap-8 w-1/4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4">
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
						<button
							className="text-sm text-gray-500 transition hover:text-white"
							tabIndex={-1}>
							<Link href={'/signup'} tabIndex={-1}>
								Not signed up yet? Sign up →
							</Link>
						</button>
					</div>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className={style['submitButton']}>
					Log In
				</button>
			</form>
		</>
	);
};

export default LogInForm;
