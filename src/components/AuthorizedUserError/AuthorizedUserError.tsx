'use client';
import LogOutButton from './LogOutButton';
import GoHomePageButton from './GoHomePageButton';

const AuthorizedUserError = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col items-center gap-6">
				<p className="text-xl">
					This page does not acceptable for authorized users
				</p>
				<div className="flex flex-row gap-4">
					<LogOutButton />
					<GoHomePageButton />
				</div>
			</div>
		</div>
	);
};

export default AuthorizedUserError;
