'use client';
import { store } from '@/context/store';
import AuthorizedUserError from '@/components/AuthorizedUserError';
import LogInForm from './LogInForm';

export default function LogIn() {
	const user = store.getState().user;
	if (user) return <AuthorizedUserError />;

	return (
		<div className="min-w-full min-h-full flex justify-center items-center">
			<LogInForm />
		</div>
	);
}
