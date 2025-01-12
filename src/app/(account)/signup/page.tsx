'use client';
import { useAppSelector } from '@/store/hooks';
import AuthorizedUserError from '@/components/AuthorizedUserError/AuthorizedUserError';
import SignUpForm from './SignUpForm';

const SignUp = () => {
	const isAuthorized = useAppSelector((state) => state.user.authorized);
	if (isAuthorized) return <AuthorizedUserError />;

	return (
		<div className="min-w-full min-h-full flex justify-center items-center">
			<SignUpForm />
		</div>
	);
};

export default SignUp;
