'use client';
import { store } from '@/context/store';
import AuthorizedUserError from '@/components/AuthorizedUserError/AuthorizedUserError';
import SignUpForm from './SignUpForm';

const SignUp = () => {
	const user = store.getState().user;
	if (user) return <AuthorizedUserError />;

	return (
		<div className="min-w-full min-h-full flex justify-center items-center">
			<SignUpForm />
		</div>
	);
};

export default SignUp;
