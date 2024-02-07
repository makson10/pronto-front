'use client';
import { useRouter } from 'next/navigation';

export default function EditProfileButton() {
	const router = useRouter();
	const handleClick = () => router.push('/profile/edit');

	return (
		<button
			className="bg-white text-black font-bold py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-gray-300"
			onClick={handleClick}>
			Edit profile
		</button>
	);
}
