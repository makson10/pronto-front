import Link from 'next/link';

export default function RegisterButton() {
	return (
		<div className="flex flex-row gap-2">
			<Link
				href={'/signup'}
				className="border-transparent border-[2px] hover:border-[white]"
				style={RegisterButtonStyle}>
				Sign up
			</Link>
			<p className="flex flex-col justify-center text-2xl">|</p>
			<Link
				href={'/login'}
				className="border-transparent border-[2px] hover:border-[white]"
				style={RegisterButtonStyle}>
				Log in
			</Link>
		</div>
	);
}

const RegisterButtonStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	paddingLeft: '0.3rem',
	paddingRight: '0.3rem',
	transition: '150ms',
};
