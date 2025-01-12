import Link from 'next/link';

const RegisterButton = () => {
	return (
		<div className="flex flex-row gap-2">
			<Link
				href={'/signup'}
				className="font-bold text-base flex flex-col justify-center px-[0.3rem] transition border-transparent border-2 hover:border-white">
				Sign up
			</Link>
			<p className="flex flex-col justify-center text-2xl">|</p>
			<Link
				href={'/login'}
				className="font-bold text-base flex flex-col justify-center px-[0.3rem] transition border-transparent border-2 hover:border-white">
				Log in
			</Link>
		</div>
	);
};

export default RegisterButton;
