'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PasswordRequirementsHint from '@/components/common/PasswordRequirementsHint';
import ChangePasswordVisibilityButton from '@/components/common/ChangePasswordVisibilityButton';
import { signUpValidationScheme } from '@/assets/validationScheme';
import { ShowMessageBox } from '@/components/common/MessageBox';
import { SignUpUser } from '@/types/user';
import axios from 'axios';
import { setUser } from '@/store/user/userSlice';
import { useAppDispatch } from '@/store/hooks';
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

const SignUp = () => {
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
			const res = await axios.post('/api/signup', { user });

			if (!res.data.okay) {
				throw new Error('Error during signup');
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

			<form className="flex flex-col gap-8" onSubmit={handleSubmit}>
				<Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
					<Box
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-between'}
						gap={'3rem'}>
						<Box display={'flex'} flexDirection={'column'} gap={'0.2rem'}>
							<Box
								display={'flex'}
								flexDirection={'row'}
								justifyContent={'space-between'}>
								<InputLabel
									htmlFor="firstName"
									sx={{
										color: 'gray',
										fontSize: '0.8rem',
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
									First Name
								</InputLabel>
								{errors.firstName && touched.firstName && (
									<Typography color={'red'} fontSize={'0.8rem'}>
										{errors.firstName}
									</Typography>
								)}
							</Box>
							<TextField
								id="firstName"
								name="firstName"
								type="text"
								size="small"
								InputProps={{
									sx: {
										width: '100%',
										borderRadius: '8px',
										bgcolor: 'white',
									},
								}}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.firstName}
							/>
						</Box>

						<Box display={'flex'} flexDirection={'column'} gap={'0.2rem'}>
							<Box
								display={'flex'}
								flexDirection={'row'}
								justifyContent={'space-between'}>
								<InputLabel
									htmlFor="lastName"
									sx={{
										color: 'gray',
										fontSize: '0.8rem',
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
									Last Name
								</InputLabel>
								{errors.lastName && touched.lastName && (
									<Typography color={'red'} fontSize={'0.8rem'}>
										{errors.lastName}
									</Typography>
								)}
							</Box>
							<TextField
								id="lastName"
								name="lastName"
								type="text"
								size="small"
								InputProps={{
									sx: {
										width: '100%',
										borderRadius: '8px',
										bgcolor: 'white',
									},
								}}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.lastName}
							/>
						</Box>
					</Box>

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
							type="text"
							size="small"
							InputProps={{
								sx: {
									width: '100%',
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
							href={'/login'}
							tabIndex={-1}>
							Already signed up? Log in →
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
					Sign up
				</Button>
			</form>
		</>
	);
};

export default SignUp;
