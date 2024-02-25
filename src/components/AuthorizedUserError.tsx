'use client';
import usePageNavigation from '@/hooks/usePageNavigation';
import LogOutButton from './LogOutButton';
import style from '@/styles/authorizedUserError.module.scss';

export default function AuthorizedUserError() {
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
}

const GoHomePageButton = () => {
	const { goToHomePage } = usePageNavigation();

	return (
		<button className={style['go-home-button']} onClick={goToHomePage}>
			Go home page
		</button>
	);
};
