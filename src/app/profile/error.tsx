'use client';
import { useRouter } from 'next/navigation';

interface Props {
	error: Error & { digest?: string; cause?: string };
	reset: () => void;
}

const Error = ({ error, reset }: Props) => {
	const router = useRouter();

	const handleClick = () => router.push('/');

	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-3xl">
				{parseInt(error.digest!) === 153975709
					? 'Error happend'
					: error.message}
			</p>
			{error.cause && <p className="text-xl">{error.cause}</p>}
			<button
				onClick={handleClick}
				className="bg-white text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
				Go to home page
			</button>
		</div>
	);
};

export default Error;
