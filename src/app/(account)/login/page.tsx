'use client';
import { store } from '@/context/store';
import AuthorizedUserError from '@/components/AuthorizedUserError/AuthorizedUserError';
import LogInForm from './LogInForm';
import GoogleLoginButton from '@/components/GoogleAuthButtons/GoogleAuthButton';
import AuthFormSeparator from '@/components/GoogleAuthButtons/AuthFormSeparator';

const LogIn = () => {
	const user = store.getState().user;
	if (user) return <AuthorizedUserError />;

	return (
		<div className="min-w-full min-h-full flex flex-col justify-center items-center gap-8">
			<LogInForm />
			<AuthFormSeparator />
			<GoogleLoginButton isLogin={true} />
		</div>
	);
};

export default LogIn;
