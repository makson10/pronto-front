'use client';
import AuthorizedUserError from '@/components/AuthorizedUserError/AuthorizedUserError';
import LogInForm from './LogInForm';
import { useAppSelector } from '@/store/hooks';

const LogIn = () => {
	const isAuthorized = useAppSelector((state) => state.user.authorized);
	if (isAuthorized) return <AuthorizedUserError />;

	return (
		<div className="min-w-full min-h-full flex justify-center items-center">
			<LogInForm />
		</div>
	);
};

export default LogIn;
