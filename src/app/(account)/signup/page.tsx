'use client';
import { store } from '@/context/store';
import AuthorizedUserError from '@/components/AuthorizedUserError/AuthorizedUserError';
import SignUpForm from './SignUpForm';
import AuthFormSeparator from '@/components/GoogleAuthButtons/AuthFormSeparator';
import GoogleLoginButton from '@/components/GoogleAuthButtons/GoogleAuthButton';

const SignUp = () => {
	const user = store.getState().user;
	if (user) return <AuthorizedUserError />;

	return (
		<div className="min-w-full min-h-full flex flex-col justify-center items-center gap-8">
			<SignUpForm />
			<AuthFormSeparator />
			<GoogleLoginButton isLogin={false} />
		</div>
	);
};

export default SignUp;
