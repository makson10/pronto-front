'use client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import PasswordRequirementsHint from '@/components/common/PasswordRequirementsHint';
import ChangePasswordVisibilityButton from '@/components/common/ChangePasswordVisibilityButton';
import { LoginUser } from '@/types/user';
import { useRouter } from 'next/navigation';
import { logInValidationScheme } from '@/assets/validationScheme';
import { ShowMessageBox } from '@/components/common/MessageBox';
import { useAppDispatch } from '@/store/hooks';
import axios from 'axios';
import { setUser } from '@/store/user/userSlice';
import { setProfile } from '@/store/profile/profileSlice';
import {
	Box,
	Button,
	InputLabel,
	Link,
	Stack,
	TextField,
	Typography,
} from '@mui/material';

const LogIn = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [errorMessageText, setErrorMessageText] =
		useState<string>('Error occured');
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

			dispatch(setUser(res.data.user));
			dispatch(setProfile(res.data.profile));
			router.push('/');
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
				<Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
					<Box display={'flex'} flexDirection={'column'} gap={'0.2rem'}>
						<Box
							display={'flex'}
							flexDirection={'row'}
							justifyContent={'space-between'}>
							<InputLabel
								htmlFor="email"
								sx={{
									color: 'gray',
									fontSize: '0.8rem',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}>
								Email
							</InputLabel>
							{errors.email && touched.email && (
								<Typography color={'red'} fontSize={'0.8rem'}>
									{errors.email}
								</Typography>
							)}
						</Box>
						<TextField
							id="email"
							name="email"
							type="email"
							size="small"
							InputProps={{
								sx: {
									borderRadius: '8px',
									bgcolor: 'white',
								},
							}}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
					</Box>

					<Box display={'flex'} flexDirection={'column'} gap={'0.2rem'}>
						<Box
							display={'flex'}
							flexDirection={'row'}
							justifyContent={'space-between'}>
							<InputLabel
								htmlFor="password"
								sx={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}>
								<Stack direction={'row'} gap={0.5}>
									<Typography
										sx={{
											color: 'gray',
											fontSize: '0.8rem',
										}}>
										Password
									</Typography>
									<PasswordRequirementsHint />
								</Stack>
							</InputLabel>
							{errors.password && touched.password && (
								<Typography color={'red'} fontSize={'0.8rem'}>
									{errors.password}
								</Typography>
							)}
						</Box>
						<Box display={'flex'} flexDirection={'row'} gap={'0.5rem'}>
							<TextField
								id="password"
								name="password"
								type={isPasswordVisible ? 'text' : 'password'}
								size="small"
								InputProps={{
									sx: {
										borderRadius: '8px',
										bgcolor: 'white',
									},
								}}
								sx={{ width: '100%' }}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							<ChangePasswordVisibilityButton
								isPasswordVisible={isPasswordVisible}
								setIsPasswordVisible={setIsPasswordVisible}
							/>
						</Box>
					</Box>
					<Box display={'flex'} flexDirection={'row'} justifyContent={'end'}>
						<Link
							color={'#6b7280'}
							fontSize={'0.875rem'}
							sx={{
								transition: 'all',
								transitionDuration: '200ms',
								'&:hover': { color: 'white' },
							}}
							href={'/signup'}
							tabIndex={-1}>
							Not signed up yet? Sign up →
						</Link>
					</Box>
				</Box>

				<Button
					type="submit"
					disabled={isSubmitting}
					sx={{
						bgcolor: '#03c03c',
						borderRadius: '0.4rem',
						p: '0.5rem',
						':hover': { bgcolor: '#03b03c' },
						':disabled': { bgcolor: '#038029', color: 'gray' },
					}}>
					Log In
				</Button>
			</form>
		</>
	);
};

export default LogIn;
