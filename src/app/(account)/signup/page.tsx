'use client';
import { store } from '@/context/store';
import NonAuthorizedUI from '@/components/NonAuthorizedUI';
import SignUpForm from './SignUpForm';

export default function SignUp() {
	const user = store.getState().user;
	if (user) return <NonAuthorizedUI />;

	return (
		<div className="min-w-full min-h-full flex justify-center items-center">
			<SignUpForm />
		</div>
	);
}
