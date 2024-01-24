'use client';
import usePageNavigation from '@/hooks/usePageNavigation';
import LogOutButton from './LogOutButton';

export default function NonAuthorizedUI() {
	return (
		<div className="flex-[2_1_auto] flex flex-col justify-center items-center">
			<div className="flex flex-col items-center gap-6">
				<p className="text-xl">
					This page does not acceptable for unauthorized users
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
		<button style={GoHomePageButtonStyle} onClick={goToHomePage}>
			Go home page
		</button>
	);
};

const GoHomePageButtonStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	backgroundColor: 'gray',
	color: 'white',
	paddingLeft: '1rem',
	paddingRight: '1rem',
	paddingTop: '0.6rem',
	paddingBottom: '0.7rem',
	borderRadius: '5px',
	fontSize: '1rem',
	WebkitBorderRadius: '.5rem',
};
